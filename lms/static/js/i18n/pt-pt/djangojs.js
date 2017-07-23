

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "#Replies": "#Antworten", 
    "%(num_questions)s question": [
      "%(num_questions)s Frage", 
      "%(num_questions)s Fragen"
    ], 
    "%(num_students)s student": [
      "%(num_students)s Teilnehmer", 
      "%(num_students)s Teilnehmer"
    ], 
    "%(num_students)s student opened Subsection": [
      "%(num_students)s Teilnehmer habt diesen Unterabschnitt ge\u00f6ffnet", 
      "%(num_students)s Teilnehmer haben diesen Unterabschnitt ge\u00f6ffnet"
    ], 
    "%(value)s hour": [
      "%(value)s Stunde", 
      "%(value)s Stunden"
    ], 
    "%(value)s minute": [
      "%(value)s Minute", 
      "%(value)s Minuten"
    ], 
    "%(value)s second": [
      "%(value)s Sekunde", 
      "%(value)s Sekunden"
    ], 
    "%d day": [
      "%d Tag", 
      "%d Tage"
    ], 
    "%d minute": [
      "%d Minute", 
      "%d Minuten"
    ], 
    "%d month": [
      "%d Monat", 
      "%d Monate"
    ], 
    "%d year": [
      "%d Jahr", 
      "%d Jahre"
    ], 
    "%s ago": "%s her", 
    "%s from now": "%s von jetzt", 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ": "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
    "Add to Dictionary": "Zum W\u00f6rterbuch hinzuf\u00fcgen", 
    "Additional Information": "Zus\u00e4tzliche Informationen", 
    "Adjust video speed": "Video-Geschwindigkeit anpassen", 
    "Adjust video volume": "Video-Lautst\u00e4rke anpassen", 
    "Advanced": "Erweitert", 
    "Align center": "Mittig ausrichten", 
    "Align left": "Links ausrichten", 
    "Align right": "Rechts ausrichten", 
    "Alignment": "Ausrichtung", 
    "All Topics": "Alle Themen", 
    "All flags have been removed. To undo, uncheck the box.": "Alle Warnungen wurden entfernt. Zum R\u00fcckg\u00e4ngigmachen, entferne das H\u00e4kchen.", 
    "All groups must have a name.": "Alle Gruppen ben\u00f6tigen einen Namen.", 
    "All teams": "Alle Teams", 
    "All topics": "Alle Themen", 
    "Alternative source": "Alternative Quelle", 
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "Es gab einen Fehler beim Abholen deiner E-Mail. Bitte versuche es sp\u00e4ter noch einmal, und benachrichtige die technische \u00dcnterst\u00fctzung, wenn das Problem weiterhin besteht.", 
    "Anchor": "Anker", 
    "Anchors": "Anker", 
    "Annotation": "Anmerkung", 
    "Annotation Text": "Text der Anmerkung", 
    "Are you sure you want to delete this comment?": "Bist du dir sicher, dass du diesen Kommentar l\u00f6schen m\u00f6chtest?", 
    "Are you sure you want to delete this post?": "Bist du dir sicher, dass du diesen Beitrag l\u00f6schen m\u00f6chtest?", 
    "Are you sure you want to delete this response?": "Bist du dir sicher, dass du diese Antwort l\u00f6schen m\u00f6chtest?", 
    "Author": "Autor", 
    "Average": "Mittel", 
    "Background color": "Hintergrundfarbe", 
    "Blockquote": "Zitat", 
    "Blockquote (Ctrl+Q)": "Zitat (STRG+Q)", 
    "Blocks": "Bl\u00f6cke", 
    "Body": "Body", 
    "Bold": "Fett", 
    "Bold (Ctrl+B)": "Fett (STRG+B)", 
    "Border": "Rahmen", 
    "Border color": "Rahmenfarbe", 
    "Bottom": "Grundlinie", 
    "Bullet list": "Aufz\u00e4hlung", 
    "Bulleted List (Ctrl+U)": "Aufz\u00e4hlende Liste (STRG+U)", 
    "Cancel": "Abbrechen", 
    "Caption": "Untertitel", 
    "Cell": "Zelle", 
    "Cell padding": "Zelleneinr\u00fcckung", 
    "Cell properties": "Zelleneigenschaften", 
    "Cell spacing": "Zellenzwischenraum", 
    "Cell type": "Zellenart", 
    "Center": "Mitte", 
    "Change image": "Bild \u00e4ndern", 
    "Check the box to remove %(count)s flag.": [
      "Klicke den Rahmen um %(count)s Warnung zu entfernen.", 
      "Klicke den Rahmen um %(count)s Warnungen zu entfernen."
    ], 
    "Check the box to remove %(totalFlags)s flag.": [
      "Klicke den Rahmen um %(totalFlags)s Warnung zu entfernen.", 
      "Klicke den Rahmen um %(totalFlags)s Warnungen zu entfernen."
    ], 
    "Check the box to remove all flags.": "Klicke den Rahmen um alle Warnungen zu entfernen.", 
    "Choose File": "Datei ausw\u00e4hlen", 
    "Choose a .csv file": "W\u00e4hlen Sie eine .csv-Datei aus", 
    "Circle": "Kreis", 
    "Clear": "L\u00f6sche", 
    "Clear formatting": "L\u00f6sche Formatierung", 
    "Close": "Schlie\u00dfen", 
    "Close Calculator": "Schlie\u00dfe Taschenrechner", 
    "Code": "Code", 
    "Code Sample (Ctrl+K)": "Codebeispiel (STRG+K)", 
    "Code block": "Code-Abschnitt", 
    "Collapse Instructions": "Anweisungen verbergen", 
    "Color": "Farbe", 
    "Cols": "Spalten", 
    "Column": "Spalte", 
    "Column group": "Spaltengruppe", 
    "Commentary": "Kommentare", 
    "Confirm": "Best\u00e4tigen", 
    "Constrain proportions": "Seitenverh\u00e4ltnisse einschr\u00e4nken", 
    "Copy": "Kopiere", 
    "Copy Email To Editor": "E-Mail-Kopie an den Verfasser", 
    "Copy row": "Kopiere Zeile", 
    "Could not find the specified string.": "Konnte die festgelegte Zeichenkette nicht finden", 
    "Could not find users associated with the following identifiers:": "F\u00fcr die folgenden Merkmale konnten keine Benutzer gefunden werden:", 
    "Country": "Land", 
    "Country or Region": "Land oder Region", 
    "Create": "Erstellen", 
    "Create Re-run": "Erstelle Wiederholungslauf", 
    "Create a New Team": "Ein neues Team erstellen", 
    "Creating missing groups": "Erstelle fehlende Gruppen", 
    "Current conversation": "Aktuelle Konversation", 
    "Custom color": "Individuelle Farbe", 
    "Custom...": "Individuelle...", 
    "Cut": "Ausschneiden", 
    "Cut row": "Zeile ausschneiden", 
    "Date Added": "Datum hinzugef\u00fcgt", 
    "Date posted": "Gesendet am", 
    "Decrease indent": "Einzug verkleinern", 
    "Default": "Standard", 
    "Delete": "L\u00f6schen", 
    "Delete column": "L\u00f6sche Spalte", 
    "Delete row": "L\u00f6sche Zeile", 
    "Delete table": "L\u00f6sche Tabelle", 
    "Description": "Beschreibung", 
    "Dimensions": "Dimensionen", 
    "Disc": "Scheibe", 
    "Div": "Div", 
    "Document properties": "Dokumenteneigenschaften", 
    "Drop target image": "Zielbild fallenlassen", 
    "Duration (sec)": "Dauer (Sek.)", 
    "Edit": "Bearbeiten", 
    "Edit HTML": "Bearbeite HTML", 
    "Edit Team": "Team bearbeiten", 
    "Education Completed": "H\u00f6chster Bildungsabschluss", 
    "Email": "E-Mail", 
    "Email Address": "E-Mail-Adresse", 
    "Emails successfully sent. The following users are no longer enrolled in the course:": "E-Mail erfolgreich versandt. Die folgenden Nutzer sind nicht mehr in den Kurs eingeschrieben: ", 
    "Embed": "Einbetten", 
    "Emoticons": "Emoticons", 
    "Encoding": "Kodiere", 
    "End": "Ende", 
    "Enter a username or email.": "Benutzername oder E-Mail-Adresse eingeben", 
    "Enter username or email": "Benutzernamen oder E-Mail-Adresse eingeben", 
    "Error": "Fehler", 
    "Error adding/removing users as beta testers.": "Fehler beim Hinzuf\u00fcgen/Entfernen von Nutzern als Beta-Tester.", 
    "Error changing user's permissions.": "Fehler beim \u00c4ndern der Rechte des Nutzers.", 
    "Error enrolling/unenrolling users.": "Fehler beim Einschreiben/Streichen der Nutzer.", 
    "Error generating grades. Please try again.": "Fehler beim Erzeugen der Noten. Bitte versuche es noch einmal.", 
    "Error getting student list.": "Fehler beim Laden der Teilnehmerliste.", 
    "Error listing task history for this student and problem.": "Fehler beim Auflisten des Aufgabenverlaufs f\u00fcr diesen Teilnehmer und diese Fragestellung.", 
    "Error retrieving grading configuration.": "Es gab einen Fehler beim Erhalt der Benotungskonfiguration.", 
    "Error sending email.": "Fehler beim Senden der E-Mail.", 
    "Error while generating certificates. Please try again.": "Fehler bei der Erstellung der Zertifikate. Bitte versuchen Sie es noch einmal.", 
    "Error: You cannot remove yourself from the Instructor group!": "Fehler: Du kannst dich nicht selbst aus der Dozentengruppe entfernen!", 
    "Errors": "Fehler", 
    "Exit full browser": "Browservollbild verlassen", 
    "Expand Instructions": "Anweisungen aufklappen", 
    "File": "Datei", 
    "File Name": "Dateiname", 
    "Fill browser": "Vollbild im Browser", 
    "Find": "Finde", 
    "Find and replace": "Finde und ersetze", 
    "Find next": "Finde n\u00e4chstes", 
    "Find previous": "Finde vorheriges", 
    "Finish": "Beende", 
    "Font Family": "Schriftfamilie", 
    "Font Sizes": "Schriftgr\u00f6\u00dfen", 
    "Footer": "Fu\u00dfzeile", 
    "Format": "Format", 
    "Formats": "Formate", 
    "Full Name": "Vollst\u00e4ndiger Name", 
    "Fullscreen": "Vollbild", 
    "Gender": "Geschlecht", 
    "General": "Allgemein", 
    "Group %s": "Gruppe %s", 
    "Group A": "Gruppe A", 
    "Group B": "Gruppe B", 
    "Group Configuration name is required.": "Name der Gruppenkonfiguration wird ben\u00f6tigt", 
    "H Align": "H Ausrichtung", 
    "HTML source code": "HTML-Quellcode", 
    "Header": "Kopfzeile", 
    "Header 1": "Kopfzeile 1", 
    "Header 2": "Kopfzeile 2", 
    "Header 3": "Kopfzeile 3", 
    "Header 4": "Kopfzeile 4", 
    "Header 5": "Kopfzeile 5", 
    "Header 6": "Kopfzeile 6", 
    "Header cell": "Kopfzeilenzelle", 
    "Headers": "Kopfzeilen", 
    "Heading": "\u00dcberschrift", 
    "Heading (Ctrl+H)": "\u00dcberschrift (STRG+H)", 
    "Heading 1": "\u00dcberschrift 1", 
    "Heading 2": "\u00dcberschrift 2", 
    "Heading 3": "\u00dcberschrift 3", 
    "Heading 4": "\u00dcberschrift 4", 
    "Heading 5": "\u00dcberschrift 5", 
    "Heading 6": "\u00dcberschrift 6", 
    "Headings": "\u00dcberschriften", 
    "Height": "H\u00f6he", 
    "Hide Annotations": "Anmerkungen verstecken", 
    "Hide Discussion": "Diskussion ausblenden", 
    "Hide notes": "Notizen verstecken", 
    "Horizontal Rule (Ctrl+R)": "Horizontale Linie (STRG+R)", 
    "Horizontal line": "Horizontale Linie", 
    "Horizontal space": "Horizontaler Abstand", 
    "Hyperlink (Ctrl+L)": "Hyperlink (STRG+L)", 
    "Ignore": "Ignorieren", 
    "Ignore all": "Ignoriere alles", 
    "Image": "Bild", 
    "Image (Ctrl+G)": "Bild (STRG+G)", 
    "Image description": "Bildbeschreibung", 
    "In Progress": "In Bearbeitung", 
    "Increase indent": "Einzug vergr\u00f6\u00dfern", 
    "Inline": "inzeilig", 
    "Insert": "Einf\u00fcgen", 
    "Insert Hyperlink": "Hyperlink einf\u00fcgen", 
    "Insert column after": "Spalte danach einf\u00fcgen", 
    "Insert column before": "Spalte davor einf\u00fcgen", 
    "Insert date/time": "Datum/Uhrzeit einf\u00fcgen", 
    "Insert image": "Bild einf\u00fcgen", 
    "Insert link": "Link einf\u00fcgen", 
    "Insert row after": "Nach Zeile einf\u00fcgen", 
    "Insert row before": "Vor Zeile einf\u00fcgen", 
    "Insert table": "Tabelle einf\u00fcgen", 
    "Insert template": "Schablone einf\u00fcgen", 
    "Insert video": "Video einf\u00fcgen", 
    "Insert/edit image": "Bild einf\u00fcgen/bearbeiten", 
    "Insert/edit link": "Link einf\u00fcgen/bearbeiten", 
    "Insert/edit video": "Video einf\u00fcgen/bearbeiten", 
    "Instructor": "Dozent", 
    "Italic": "Kursiv", 
    "Italic (Ctrl+I)": "Kursiv (STRG+I)", 
    "Justify": "Ausrichten", 
    "KB": "KB", 
    "Keywords": "Schl\u00fcsselworte", 
    "Language": "Sprache", 
    "Leave this team?": "Dieses Team verlassen?", 
    "Left": "Links", 
    "Left to right": "Links nach rechts", 
    "Less": "Weniger", 
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "Links werden auf Anfrage generiert und verfallen nach 5 Minuten aufgrund der sensiblen Natur der Teilnehmerinformationen.", 
    "List item": "Listenelement", 
    "Load all responses": "Lade alle Antworten", 
    "Loading content": "Inhalt wird geladen", 
    "Loading more threads": "Lade weitere Diskussionsstr\u00e4nge", 
    "Loud": "Laut", 
    "Low": "Niedrig", 
    "Lower Alpha": "Klein Alpha", 
    "Lower Greek": "Klein Griechisch", 
    "Lower Roman": "Klein R\u00f6misch", 
    "MB": "MB", 
    "Make Visible to Students": "F\u00fcr die Teilnehmer anzeigen lassen", 
    "Markdown Editing Help": "Markdown Bearbeitungshilfen", 
    "Match case": "Gross-/Kleinschreibung", 
    "Maximum": "Maximal", 
    "Membership": "Mitgliedschaft", 
    "Merge cells": "Zellen verbinden", 
    "Message:": "Nachricht: ", 
    "Middle": "Mitte", 
    "Module state successfully deleted.": "Modulzustand erfogreich gel\u00f6scht.", 
    "More": "Mehr", 
    "Mute": "Stumm", 
    "Muted": "Stumm", 
    "My Notes": "Meine Notizen", 
    "My Team": "Mein Team", 
    "Name": "Name", 
    "New document": "Neues Dokument", 
    "New window": "Neues Fenster", 
    "Next": "N\u00e4chste", 
    "No Flash Detected": "Kein Flash gefunden", 
    "No Webcam Detected": "Keine Webcam gefunden", 
    "No color": "Keine Farbe", 
    "No tasks currently running.": "Momentan laufen keine Aufgaben.", 
    "Nonbreaking space": "Gesch\u00fctztes Leerzeichen", 
    "None": "kein", 
    "Number Sent": "Anzahl gesendet", 
    "Number of Students": "Anzahl der Teilnehmer", 
    "Numbered List (Ctrl+O)": "Nummerierte Liste (STRG+O)", 
    "Numbered list": "Nummerierte Liste", 
    "OK": "OK", 
    "Ok": "Ok", 
    "Open Calculator": "Taschenrechner \u00f6ffnen", 
    "Order History": "Bestellverlauf", 
    "Page break": "Seitenumbruch", 
    "Paragraph": "Absatz", 
    "Password": "Passwort", 
    "Paste": "Einf\u00fcgen", 
    "Paste as text": "Als Text einf\u00fcgen", 
    "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Einf\u00fcgen erfolgt nun im reinen Textmodus. Inhalt wird ab jetzt als reiner Text eingef\u00fcgt, bis du diese Option abschaltest.", 
    "Paste row after": "Zeile danach einf\u00fcgen", 
    "Paste row before": "Zeile davor einf\u00fcgen", 
    "Paste your embed code below:": "F\u00fcge deinen eingebetteten Code unten ein:", 
    "Pause": "Pause", 
    "Play": "Wiedergabe", 
    "Play video": "Video abspielen", 
    "Please do not use any spaces in this field.": "Bitte keine Leerzeichen in diesem Eingabefeld benutzen.", 
    "Please enter a problem location.": "Bitte gib den Pfad der Fragestellung ein.", 
    "Please enter a student email address or username.": "Bitte gib eine Teilnehmer-E-Mail-Adresse oder einen Benutzernamen ein.", 
    "Please enter a username or email.": "Bitte gib einen Benutzernamen oder eine E-Mail-Adresse ein.", 
    "Please enter a valid password": "Bitte geben Sie ein g\u00fcltiges Passwort ein", 
    "Post body": "Beitragsrumpf", 
    "Poster": "Beitragsautor", 
    "Pre": "Vor", 
    "Preferred Language": "Bevorzugte Sprache", 
    "Preformatted": "Vorformatiert", 
    "Prev": "Vorher", 
    "Preview": "Vorschau", 
    "Print": "Drucken", 
    "Public": "\u00d6ffentlich", 
    "Recent Activity": "K\u00fcrzliche Aktivit\u00e4t", 
    "Redo": "Redo", 
    "Redo (Ctrl+Shift+Z)": "Wiederholen (STRG+SHIFT+Z)", 
    "Redo (Ctrl+Y)": "Wiederholen (STRG + Y)", 
    "Remove link": "Link entfernen", 
    "Replace": "Ersetzen", 
    "Replace all": "Alles ersetzen", 
    "Replace with": "Ersetze mit", 
    "Reply": "Antworte", 
    "Reply to Annotation": "Auf Anmerkung antworten", 
    "Report annotation as inappropriate or offensive.": "Berichte Anmerkung als anst\u00f6\u00dfig oder beleidigend.", 
    "Requester": "Anforderer", 
    "Required field.": "Erforderliches Feld.", 
    "Reset Your Password": "Passwort zur\u00fccksetzen", 
    "Restore last draft": "Letzten Entwurf wiederherstellen", 
    "Return to Export": "Zum Export zur\u00fcckkehren", 
    "Revoke access": "Zugang widerrufen", 
    "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Rich-Text-Bereich. Dr\u00fccke ALT-F9 f\u00fcr Men\u00fc. Dr\u00fccke ALT-F10 f\u00fcr Werkzeugleiste. Dr\u00fccke ALT-0 f\u00fcr Hilfe", 
    "Right": "Rechts", 
    "Right to left": "Rechts nach links", 
    "Robots": "Roboter", 
    "Row": "Zeile", 
    "Row group": "Zeilengruppe", 
    "Row properties": "Zeileneigenschaften", 
    "Row type": "Zeilenart", 
    "Rows": "Zeilen", 
    "Save": "Speichern", 
    "Save changes": "\u00c4nderungen speichern", 
    "Scope": "Bereich", 
    "Search": "Suche", 
    "Search Results": "Suchergebnisse", 
    "Search teams": "Teams durchsuchen", 
    "Select a chapter": "W\u00e4hle ein Kapitel.", 
    "Select all": "Alles ausw\u00e4hlen", 
    "Sent By": "Absender", 
    "Sent By:": "Absender:", 
    "Sent To:": "An:", 
    "Show Annotations": "Zeige Anmerkungen", 
    "Show Discussion": "Diskussion anzeigen", 
    "Show blocks": "Zeige Bl\u00f6cke", 
    "Show invisible characters": "Zeige unsichtbare Zeichen", 
    "Show notes": "Notizen anzeigen", 
    "Showing all responses": "Zeige alle Antworten an", 
    "Source": "Quelle", 
    "Source code": "Quellcode", 
    "Special character": "Sonderzeichen", 
    "Speed": "Geschwindigkeit", 
    "Spellcheck": "Rechtschreibpr\u00fcfung", 
    "Split cell": "Zelle teilen", 
    "Square": "Quadrat", 
    "Start": "Start", 
    "Start search": "Starte suche", 
    "State": "Zustand", 
    "Strikethrough": "Durchgestrichen", 
    "Style": "Stil", 
    "Subject": "Betreff", 
    "Subject:": "Betreff:", 
    "Submitted": "Abgesendet", 
    "Subscript": "Tiefgestellt", 
    "Successfully deleted student state for user {user}": "Teilnehmerstatus f\u00fcr Nutzer {user} erfolgreich gel\u00f6scht.", 
    "Successfully enrolled and sent email to the following users:": "Erfolgreich eingeschrieben und E-Mail an folgende Nutzer versandt:", 
    "Successfully enrolled the following users:": "Folgende Nutzer wurden erfolgreich eingeschrieben:", 
    "Successfully rescored problem for user {user}": "Fragestellung f\u00fcr Benutzer {user} erfolgreich neu bewertet.", 
    "Successfully reset the attempts for user {user}": "Versuche f\u00fcr Nutzer {user} erfolgreich zur\u00fcckgesetzt.", 
    "Superscript": "Hochgestellt", 
    "Table": "Tabelle", 
    "Table properties": "Tabelleneigenschaften", 
    "Tags": "Stichworte", 
    "Tags:": "Stichworte:", 
    "Target": "Ziel", 
    "Task ID": "Aufgaben-ID", 
    "Task Progress": "Aufgabenfortschritt", 
    "Task Status": "Aufgabenstatus", 
    "Task Type": "Aufgabentyp", 
    "Task inputs": "Aufgaben-Eingaben", 
    "Team Description (Required) *": "Teambeschreibung (Erforderlich) *", 
    "Team Name (Required) *": "Teamname (Erforderlich) *", 
    "Team Search": "Teamsuche", 
    "Teams": "Teams", 
    "Templates": "Schablonen", 
    "Text": "Text", 
    "Text color": "Textfarbe", 
    "Text to display": "Anzeigetext", 
    "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "Die URL, die du eingegeben hast scheint eine E-Mail-Adresse zu sein. M\u00f6chtest du das ben\u00f6tigte Prefix mailto: hinzuf\u00fcgen?", 
    "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": "Die URL, die du eingegeben hast scheint ein externer Link zu sein. M\u00f6chtest du das ben\u00f6tigte Prefix http:// hinzuf\u00fcgen?", 
    "The following email addresses and/or usernames are invalid:": "Die folgenden E-Mail-Adressen und/oder Nutzernamen sind ung\u00fcltig:", 
    "The following users are no longer enrolled in the course:": "Die folgenden Nutzer sind nicht l\u00e4nger in den Kurs eingeschrieben:", 
    "There is no email history for this course.": "Es gibt keinen E-Mail-Verlauf f\u00fcr diesen Kurs.", 
    "There must be at least one group.": "Es ist wenigstens eine Gruppe erforderlich.", 
    "There was an error obtaining email content history for this course.": "Es gab einen Fehler beim Holen des E-Mail-Inhalt-Verlauf f\u00fcr diesen Kurs.", 
    "There was an error obtaining email task history for this course.": "Es gab einen Fehler beim Holen des E-Mail-Aufgaben-Verlaufs f\u00fcr diesen Kurs.", 
    "These users were not added as beta testers:": "Diese Nutzer wurden nicht zu den Beta-Testern hinzugef\u00fcgt:", 
    "These users were not affiliated with the course so could not be unenrolled:": "Diese Nutzer waren nicht dem Kurs angeh\u00f6rig, und konnten deshalb nicht gestrichen werden:", 
    "These users were not removed as beta testers:": "Diese Nutzer wurden nicht aus den Beta-Testern gestrichen:", 
    "These users were successfully added as beta testers:": "Diese Nutzer wurden erfolgreich zu den Beta-Testern hinzugef\u00fcgt: ", 
    "These users were successfully removed as beta testers:": "Diese Nutzer wurden erfolgreich aus den Beta-Testern gestrichen:", 
    "These users will be allowed to enroll once they register:": "Diesen Nutzern wird erlaubt sich einzuschreiben, sobald sie sich registriert haben:", 
    "These users will be enrolled once they register:": "Diese Teilnhemer werden eingeschrieben, sobald sie sich registriert haben:", 
    "This annotation has %(count)s flag.": [
      "Diese Anmerkung hat %(count)s Warnung.", 
      "Diese Anmerkung hat %(count)s Warnungen."
    ], 
    "This browser cannot play .mp4, .ogg, or .webm files.": "Dieser Browser kann Dateien der Formate .mp4, .ogg, oder .webm nicht wiedergeben.", 
    "This team is full.": "Dieses Team ist voll.", 
    "Time Sent": "Sendungsuhrzeit", 
    "Time Sent:": "Sendungsuhrzeit:", 
    "Title": "Titel", 
    "Tools": "Werkzeuge", 
    "Top": "Oben", 
    "Topic": "Thema", 
    "Try using a different browser, such as Google Chrome.": "Versuche es mit einem anderen Browser, z.B. Google Chrome.", 
    "URL": "URL", 
    "Underline": "Unterstrich", 
    "Undo": "Undo", 
    "Undo (Ctrl+Z)": "R\u00fcckg\u00e4ngig (STRG+Z)", 
    "Unknown": "Unbekannt", 
    "Unknown Error Occurred.": "Unbekannter Fehler aufgetreten.", 
    "Upload File": "Datei hochladen", 
    "Upload New File": "Neue Datei hochladen", 
    "Upload an image": "Ein Bild hochladen", 
    "Upper Alpha": "Gro\u00df Alpha", 
    "Upper Roman": "Gro\u00df R\u00f6misch", 
    "Url": "URL", 
    "User": "Benutzer", 
    "Username": "Benutzername", 
    "Users": "Benutzer", 
    "Users must create and activate their account before they can be promoted to beta tester.": "Nutzer m\u00fcssen ihr Konto erstellen und aktivieren, bevor sie zum Beta-Tester berufen werden k\u00f6nnen. ", 
    "V Align": "V Ausrichtung", 
    "Vertical space": "Vertikaler Abstand", 
    "Very loud": "Sehr Laut", 
    "Very low": "Sehr niedrig", 
    "Video": "Video", 
    "Video ended": "Video zu Ende", 
    "Video position": "Videoposition", 
    "View": "Ansicht", 
    "View all errors": "Alle Fehler ansehen", 
    "Visual aids": "Optische Hilfen", 
    "Volume": "Lautst\u00e4rke", 
    "Warnings": "Warnungen", 
    "Whole words": "Ganze Worte", 
    "Width": "Breite", 
    "Words: {0}": "W\u00f6rter: {0}", 
    "Year of Birth": "Geburtsjahr", 
    "You are not currently a member of any team.": "Du bist aktuell kein Mitgied eines Teams.", 
    "You have already reported this annotation.": "Du hast diese Anmerkung bereits mitgeteilt.", 
    "You have unsaved changes are you sure you want to navigate away?": "Es gibt \u00c4nderungen, die noch nicht gespeichert sind. M\u00f6chtest du wirklich die Seite verlassen?", 
    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.": "Dein Browser unterst\u00fctzt keinen drekten Zugriff auf die Zwischenablage. Bitte nutze stattdessen die Strg+X/C/V Tastaturk\u00fcrzel.", 
    "Your changes have been saved.": "Ihre \u00c4nderungen wurden gespeichert.", 
    "Your message cannot be blank.": "Deine Nachricht darf nicht leer sein.", 
    "Your message must have a subject.": "Deine Nachricht muss einen Betreff haben.", 
    "a day": "ein Tag", 
    "about %d hour": [
      "Ungef\u00e4hr %d Stunde", 
      "ungef\u00e4hr %d Stunden"
    ], 
    "about a minute": "ungef\u00e4hr eine Minute", 
    "about a month": "ungef\u00e4hr ein Monat", 
    "about a year": "ungef\u00e4hr ein Jahr", 
    "about an hour": "ungef\u00e4hr eine Stunde", 
    "and others": "und andere", 
    "anonymous": "Anonym", 
    "bytes": "bytes", 
    "certificate": "Zertifikat", 
    "correct": "richtig", 
    "dragging": "ziehen", 
    "dragging out of slider": "Ziehen au\u00dferhalb des Schiebereglers", 
    "dropped in slider": "In den Schieberegler fallengelassen", 
    "dropped on target": "Auf das Ziel fallengelassen", 
    "emphasized text": "hervorgehobener Text", 
    "enter code here": "Code hier eingeben", 
    "enter link description here": "Linkbeschreibung hier eingeben", 
    "incorrect": "falsch", 
    "last activity": "letzte Aktivit\u00e4t", 
    "less than a minute": "weniger als eine Minute", 
    "or": "oder", 
    "section": "Abschnitt", 
    "strong text": "fetter Text", 
    "subsection": "Unterabschnitt", 
    "unit": "Lerneinheit", 
    "\u2026": "..."
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j \\d\\e F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

