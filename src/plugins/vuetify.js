// Vuetify
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    display: {
        mobileBreakpoint: 'md',
        thresholds: {
            xs: 0,
            sm: 575,
            md: 991,
            lg: 1200,
            xl: 2000,
        }
    }
})

export default vuetify