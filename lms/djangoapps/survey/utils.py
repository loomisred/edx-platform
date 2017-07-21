"""
Utilities for determining whether or not a survey needs to be completed.
"""
from courseware.access import has_access
from survey.models import SurveyForm, SurveyAnswer


def is_survey_required_for_course(course_descriptor):
    """
    Returns whether a Survey is required for this course
    """

    # check to see that the survey is required in the CourseDescriptor
    is_survey_required = getattr(course_descriptor, 'course_survey_required', False)

    #  that the specified Survey exists
    is_survey_required = (is_survey_required and
                          SurveyForm.get(course_descriptor.course_survey_name, throw_if_not_found=False))
    return is_survey_required


def must_answer_survey(user, course_descriptor):
    """
    Returns whether a user is required to answer the survey and has yet to do so.
    """

    if not is_survey_required_for_course(course_descriptor):
        return False

    # anonymous users do not need to answer the survey
    if user.is_anonymous():
        return False

    # Exceptions already handled above in is_survey_required_for_course()
    survey = SurveyForm.get(course_descriptor.course_survey_name)

    has_staff_access = has_access(user, 'staff', course_descriptor)
    # survey is required and it exists, let's see if user has answered the survey
    # course staff do not need to answer survey
    answered_survey = SurveyAnswer.do_survey_answers_exist(survey, user)
    if has_staff_access:
        return False
    if not answered_survey:
        return True
