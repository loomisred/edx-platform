

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
    "%(value)s hour": [
      "%(value)s ora", 
      "%(value)s ore"
    ], 
    "%(value)s minute": [
      "%(value)s minuto", 
      "%(value)s minuti"
    ], 
    "%d day": [
      "%d giorno", 
      "%d giorni"
    ], 
    "%d minute": [
      "%d minuto", 
      "%d minuti"
    ], 
    "%d month": [
      "%d mese", 
      "%d mesi"
    ], 
    "%d year": [
      "%d anno", 
      "%d anni"
    ], 
    "Are you sure you want to delete this update?": "Sei sicuro di voler cancellare questo aggiornamento?", 
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "Sei sicuro di voler cancellare questo elemento. Non pu\u00f2 essere annullato!\n\n\nInoltre, tutti i contenuti che fanno riferimento a questo elemento non funzioneranno pi\u00f9 (es: link o immagini non funzionanti)", 
    "Date Added": "Data inserimento", 
    "Delete File Confirmation": "Conferma cancellazione file", 
    "Delete \u201c<%= name %>\u201d?": "Vuoi cancellare \u201c<%= name %>\u201d?", 
    "Deleting": "Cancellazione in Corso", 
    "Deleting a textbook cannot be undone and once deleted any reference to it in your courseware's navigation will also be removed.": "La cancellazione di un manuale non pu\u00f2 essere annullata e una volta cancellato tutti i riferimenti ad esso nel men\u00f9 di navigazione del corso saranno rimossi", 
    "Files must be in JPEG or PNG format.": "I file devono essere in formato JPEG o PNG.", 
    "Grace period must be specified in HH:MM format.": "Il periodo di grazia deve essere specificato nel formato HH:MM.", 
    "Key should only contain letters, numbers, _, or -": "La parola chiave non pu\u00f2 contenere lettere, numeri , _, o -", 
    "Only <%= fileTypes %> files can be uploaded. Please select a file ending in <%= fileExtensions %> to upload.": "Solo file di tipo <%= fileTypes %> possono essere caricati. Per favore seleziona un file con estensione  <%= fileExtensions %> da caricare.", 
    "Please address the errors on this page first, and then save your progress.": "Per favore verifica gli errori in questa pagina e poi salva il tuo progresso.", 
    "Please enter an integer between 0 and 100.": "Per favore inserisci un numero intero da 0 a 100", 
    "Please enter an integer greater than 0.": "Per favore inserisci un numero intero maggiore di 0.", 
    "Please enter non-negative integer.": "Per favore inserisci un intero non negativo.", 
    "Save Changes": "Salva  Modifiche", 
    "The course must have an assigned start date.": "Deve essere assegnata una data di inizio per il corso", 
    "The enrollment end date cannot be after the course end date.": "La data di fine iscrizioni non pu\u00f2 essere successiva alla data di fine corso", 
    "The enrollment start date cannot be after the enrollment end date.": "La data di inizio iscrizioni non pu\u00f2 essere successiva alla data di fine iscrizioni", 
    "There's already another assignment type with this name.": "Esiste gi\u00e0 un tipo di compito con questo nome", 
    "This action cannot be undone.": "Questa azione non pu\u00f2 essere annullata.", 
    "This link will open in a modal window": "Questo link verr\u00e0 aperto in una finestra modale", 
    "Upload a new PDF to \u201c<%= name %>\u201d": "Carica un nuovo PDF in \u201c<%= name %>\u201d", 
    "Upload your course image.": "Carica l'immagine del tuo corso", 
    "Volume": "Volume", 
    "We're sorry, there was an error": "Ci scusiamo, si \u00e8 verificato un errore", 
    "You must specify a name": "\u00c8 necessario specificare un nome", 
    "You've made some changes": "Hai fatto delle modifiche", 
    "You've made some changes, but there are some errors": "Hai fatto delle modifiche , ma si sono verificati degli errori", 
    "Your changes will not take effect until you save your progress.": "Le tue modifiche non avranno effetto finch\u00e8 non avrai salvato.", 
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "Le tue modifiche non avranno effetto finch\u00e9 non avrai salvato. Fai attenzione con la formattazione di chiave e valore perch\u00e9 la validazione non \u00e8 implementata.", 
    "Your file has been deleted.": "Il tuo file \u00e8 stato cancellato.", 
    "Your policy changes have been saved.": "Le tue policy sono state salvate", 
    "a day": "un giorno", 
    "about %d hour": [
      "circa %d ora", 
      "circa %d ore"
    ], 
    "about a minute": "circa un minuto", 
    "about a month": "circa un mese", 
    "about a year": "circa un anno", 
    "about an hour": "circa un ora", 
    "less than a minute": "meno di un minuto", 
    "or": "o"
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
    "DATETIME_FORMAT": "l d F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M", 
      "%d-%m-%y"
    ], 
    "DATE_FORMAT": "d F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%Y/%m/%d", 
      "%d-%m-%Y", 
      "%Y-%m-%d", 
      "%d-%m-%y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j/F", 
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
    "YEAR_MONTH_FORMAT": "F Y"
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

