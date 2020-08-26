import { Component, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { HostDirective } from "./host.directive";
import { HelloComponent, HiComponent } from "./hello.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major + ' Dynamic Component';
  name = " Component";
  @ViewChild(HostDirective, { static: true })
  childref: HostDirective;
  components = [HelloComponent, HiComponent];

  constructor(public facRes: ComponentFactoryResolver) {}
  loadComponent(id) {
    console.log(id);
    this.childref.viewref.clear();
    const resFactory = this.facRes.resolveComponentFactory(this.components[id]);
    this.childref.viewref.createComponent(resFactory);
  }
}
