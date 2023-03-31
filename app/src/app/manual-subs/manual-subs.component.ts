import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { ManualSubsStore } from 'src/app/manual-subs/manual-subs.store';

@Component({
  selector: 'app-manual-subs',
  templateUrl: './manual-subs.component.html',
  styleUrls: ['./manual-subs.component.scss'],
  providers: [ ManualSubsStore ]
})
export class ManualSubsComponent implements OnInit {

  nameControl: FormControl = new FormControl('');
  usernameControl: FormControl = new FormControl('');

  // 1st alternative: use the async pipe in the template
  // updateStream$ = this.nameControl.valueChanges.pipe(
  //   tap(name => this.usernameControl.setValue(`Super ${name}`))
  // );

  // 2d alternative: use component store and trigger an effect
  // constructor(private readonly manualSubsStore: ManualSubsStore) {}

  ngOnInit() {
    // Default implementation: Manual subscription
    this.nameControl.valueChanges.subscribe(name => {
      this.usernameControl.setValue(`Super ${name}`);
    });

    // this.manualSubsStore.valueChangeEffect(
    //   this.updateStream$
    // );
  }

}
