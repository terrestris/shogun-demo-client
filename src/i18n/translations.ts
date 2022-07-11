export default {
  de: {
    translation: {
      ApplicationInfo: {
        title: 'Über',
        versionTitle: 'Version',
        buildTitle: 'Build'
      },
      AddLayerModal: {
        addSelectedLayers: 'Auswahl hinzufügen',
        addAllLayers: 'Alle hinzufügen',
        inputPlaceholder: 'WMS GetCapabilities URL angeben…',
        externalWmsFolder: 'Externe Themen',
        title: 'WMS hinzufügen',
        columnTitle: 'Name',
        errorMessage: 'Fehler',
        errorDescription: 'Das Capabilities Dokument konnte nicht geladen werden, bitte prüfen Sie die URL'
      },
      Measure: {
        title: 'Messen',
        line: 'Entfernung',
        area: 'Fläche',
        clicktodrawline: 'Zum Zeichnen einer Linie klicken',
        clicktodrawarea: 'Zum Zeichnen einer Fläche klicken'
      },
      FeatureInfo: {
        usageHint: 'Klicken Sie in die Karte, um Detailinformationen zu erhalten.'
      },
      LayerTree: {
        transparency: 'Transparenz',
        externalWmsFolder: 'Externe Dienste',
        noLegendAvailable: 'Keine Legende verfügbar'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Auf Layerausdehnung zoomen',
        extentError: 'Konnte nicht auf die Layerausdehnung zoomen',
        removeLayer: 'Layer entfernen',
        showLegend: 'Legende anzeigen',
        hideLegend: 'Legende ausblenden'
      },
      ToolMenu: {
        expand: 'Menu ausklappen',
        collapse: 'Menu einklappen',
        measure: 'Messen',
        featureInfo: 'Karteninhalte abfragen',
        addWms: 'WMS hinzufügen',
        print: 'Export',
        layertree: 'Karten'
      },
      PrintForm: {
        title: 'Kartentitel',
        initialTitle: 'Druckausgabe',
        titlePlaceholder: 'Bitte geben Sie einen Titel ein',
        comment: 'Bemerkung',
        commentPlaceholder: 'Bitte geben Sie einen Kommentar ein',
        layout: 'Vorlage',
        dpi: 'Auflösung',
        format: 'Format',
        downloadBtnText: 'Ausdruck erzeugen',
        printJobErrorMsg: 'Der Kartenausdruck konnte nicht erzeugt werden',
        initErrorMsg: 'Der Kartendruck Generator konnte nicht initialisiert werden.',
        outputFormatPlaceholder: 'Bitte wählen Sie ein Ausgabeformat aus',
        resolutionPlaceholder: 'Bitte wählen Sie eine Ausgabequalität aus'
      },
      Footer: {
        refSystem: 'Bezugssystem',
        scale: 'Maßstab',
        version: 'Klient Version',
        mousePosition: 'Mausposition',
        imprint: 'Impressum',
        contact: 'Kontakt',
        privacypolicy: 'Datenschutz'
      },
      Index: {
        applicationLoadErrorMessage: 'Fehler beim Laden der Applikation',
        applicationLoadErrorDescription: 'Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden. ' +
          'Die Standardkonfiguration wird stattdessen geladen.',
        errorMessage: 'Fehler beim Laden der Applikation',
        errorDescription: 'Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden. ' +
          'Bitte laden Sie die Seite erneut.'
      },
      Nominatim: {
        placeholder: 'Ortsname, Straßenname, Stadtteilname, POI usw.'
      },
      UserMenu: {
        settingsMenuTitle: 'Profil bearbeiten',
        infoMenuTitle: 'Über',
        logoutMenuTitle: 'Ausloggen',
        loginMenuTitle: 'Anmelden'
      }
    }
  },
  en: {
    translation: {
      ApplicationInfo: {
        title: 'About',
        versionTitle: 'Version',
        buildTitle: 'Build'
      },
      AddLayerModal: {
        addSelectedLayers: 'Add selected',
        addAllLayers: 'Add all',
        inputPlaceholder: 'Enter a WMS GetCapabilities URL…',
        externalWmsFolder: 'External layers',
        title: 'Add WMS',
        columnTitle: 'Name',
        errorMessage: 'Error',
        errorDescription: 'Could not load the provided Capabilities document, please check the validity of the URL'
      },
      Measure: {
        title: 'Measure',
        line: 'Distance',
        area: 'Area',
        clicktodrawline: 'Click to draw line',
        clicktodrawarea: 'Click to draw area'
      },
      FeatureInfo: {
        usageHint: 'Click on the map to get details about the clicked coordinate.'
      },
      LayerTree: {
        transparency: 'Transparency',
        externalWmsFolder: 'External services',
        noLegendAvailable: 'No legend available'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Zoom to layer extent',
        extentError: 'Could not zoom to layer extent',
        removeLayer: 'Remove layer',
        showLegend: 'Show legend',
        hideLegend: 'Hide legend'
      },
      ToolMenu: {
        expand: 'Expand',
        collapse: 'Collapse',
        measure: 'Measure',
        featureInfo: 'Query map features',
        addWms: 'Add WMS',
        print: 'Export',
        layertree: 'Maps'
      },
      PrintForm: {
        title: 'Title',
        initialTitle: 'Title',
        titlePlaceholder: 'Please input a title…',
        comment: 'Comment',
        commentPlaceholder: 'Please enter a comment…',
        layout: 'Layout',
        dpi: 'Resolution',
        format: 'Format',
        downloadBtnText: 'Create print',
        printJobErrorMsg: 'Could not generate PDF output',
        initErrorMsg: 'PDF Generator could not be initialized',
        outputFormatPlaceholder: 'Please select an output format',
        resolutionPlaceholder: 'Please select an output quality'
      },
      Footer: {
        refSystem: 'Reference system',
        scale: 'Scale',
        version: 'Client version',
        mousePosition: 'Mouse position',
        imprint: 'Imprint',
        contact: 'Contact',
        privacypolicy: 'Privacy'
      },
      Index: {
        applicationLoadErrorMessage: 'Error while loading the application',
        applicationLoadErrorDescription: 'The application with ID {{applicationId}} could not be loaded correctly. ' +
          'You\'re seeing the default application configuration.',
        errorMessage: 'Error while loading the application',
        errorDescription: 'An unexpected error occured while loading the application. Please try to reload the page.'
      },
      Nominatim: {
        placeholder: 'Place name, street name, district name, POI, etc.'
      },
      UserMenu: {
        settingsMenuTitle: 'Edit profile',
        infoMenuTitle: 'About',
        logoutMenuTitle: 'Logout',
        loginMenuTitle: 'Login'
      }
    }
  }
};
