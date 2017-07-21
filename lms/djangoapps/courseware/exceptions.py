"""
Exception classes used in lms/courseware.
"""


class Redirect(Exception):
    """
    Exception class that requires redirecting to a URL.
    """
    def __init__(self, url):
        super(Redirect, self).__init__()
        self.url = url


class CourseAccessRedirect(Redirect):
    """
    Redirect raised when user does not have access to a course.

    access_error: the AccessError that caused the redirect
        The AccessError contains messages for developers and users explaining why
        the user was denied access. These strings can then be exposed to the user.
    """
    def __init__(self, url, access_error=None):
        super(CourseAccessRedirect, self).__init__(url)
        self.access_error = access_error
