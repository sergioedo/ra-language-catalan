module.exports = {
    ra: {
        action: {
            add_filter: 'Afegir filtre',
            add: 'Afegir',
            back: 'Tornar',
            bulk_actions: '1 element seleccionat |||| %{smart_count} elements seleccionats',
            cancel: 'Cancel·lar',
            clear_input_value: 'Netejar valor',
            clone: 'Clonar',
            create: 'Crear',
            delete: 'Eliminar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Llistar',
            refresh: 'Refrescar',
            remove_filter: 'Esborrar aquest filtre',
            remove: 'Esborrar',
            save: 'Desar',
            search: 'Cercar',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Desfer',
        },
        boolean: {
            true: 'Si',
            false: 'No',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: "S'ha produït un error",
            list: 'Llista de %{name}',
            loading: 'Carregant',
            not_found: "No s'ha trobat",
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'Arrossega els fitxers a pujar o clica per seleccionar-ne un.',
                upload_single: 'Arrossega el fitxer a pujar o clica per seleccionar-lo.',
            },
            image: {
                upload_several:
                    'Arrossega les imatges a pujar o clica per seleccionar-ne una.',
                upload_single:
                    'Arrossega la imatge a pujar o clica per seleccionar-la.',
            },
            references: {
                all_missing: "No s'han pogut trobar referències.",
                many_missing:
                    'Al menys una de les referències associades no sembla estar disponible.',
                single_missing:
                    'La referència associada no sembla estar disponible.',
            },
        },
        message: {
            about: 'Sobre la versió',
            are_you_sure: 'Està segur?',
            bulk_delete_content:
                "Està segur d'eliminar l'element %{name}? |||| Està segur d'eliminar aquests %{smart_count} elements?",
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name} elements',
            delete_content: "Està segur d'eliminar aquest element?",
            delete_title: 'Eliminar %{name} #%{id}',
            details: 'Detalls',
            error:
                "S'ha prodït un error al client i la seva petició no s'ha pogut completar.",
            invalid_form: 'El formulari no és vàlid. Si us plau, revisi els errors',
            loading: "La pàgina s'està carregant, esperi un moment si us plau",
            no: 'No',
            not_found:
                'O bé ha escrit una URL incorrecta, o bé ha navegat a un enllaç erroni.',
            yes: 'Sí',
        },
        navigation: {
            no_results: 'Sense resultats',
            no_more_results:
                'La pàgina número %{page} està fora de rang. Provi amb la pàgina anterior.',
            page_out_of_boundaries: 'Pàgina número %{page} fora de rang',
            page_out_from_end: 'No es pot anar més enllà de la última pàgina',
            page_out_from_begin: 'No es pot anar més enllà de la pàgina 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            page_rows_per_page: 'Files per pàgina:',
            next: 'Següent',
            prev: 'Anterior',
        },
        auth: {
            user_menu: 'Perfil',
            username: 'Usuari',
            password: 'Contrasenya',
            sign_in: 'Iniciar sessió',
            sign_in_error: "Ha fallat l'autenticació, si us plau torni a provar-ho",
            logout: 'Tancar sessió',
        },
        notification: {
            updated: 'Element actualitzat |||| %{smart_count} elements actualitzats',
            created: 'Element creat',
            deleted: 'Element eliminat |||| %{smart_count} elements eliminats',
            bad_item: 'Element incorrecte',
            item_doesnt_exist: "L'element no existeix",
            http_error: 'Error de comunicació amb el servidor',
            data_provider_error:
                'Error del dataProvider. Comprova la consola per més detalls.',
            canceled: 'Acció cancel·lada',
        },
        validation: {
            required: 'Obligatori',
            minLength: 'Longitud mínima de %{min} caràcters',
            maxLength: 'Longitud màxima de %{max} caràcters',
            minValue: 'El valor mínim és %{min}',
            maxValue: 'El valor màxim és %{max}',
            number: 'Ha de ser un valor numèric',
            email: 'Ha de ser una adreça electrònica vàlida',
            oneOf: "Ha de ser un d'aquests valors: %{options}",
            regex: 'Ha de complir el format (expressió regular): %{pattern}',
        },
    },
};
