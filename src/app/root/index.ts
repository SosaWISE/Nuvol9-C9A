/** LIBRARIES */
import { RootComponent } from './root.component';
import { RootSearchComponent } from './root.search.component';
import { CLAIM_TABS_COMPONENT } from './claimTabs';
import { DASHBOARD_COMPONENT } from './dashboard';

export const ROOT_DECLARATIOS = [
    RootComponent,
    RootSearchComponent,
    ...CLAIM_TABS_COMPONENT,
    ...DASHBOARD_COMPONENT
]; 