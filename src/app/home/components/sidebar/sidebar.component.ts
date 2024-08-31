import { Component } from "@angular/core";

@Component({
    selector : "sidebar-component",
    templateUrl : "./sidebar.component.html"
})
export class SidebarComponent {
    sidebarItems : Array<string> = [
        "Dashboard", "Income", "Expence", "Budgeting", "Goals", "Profile", "Settings", 
    ]
}