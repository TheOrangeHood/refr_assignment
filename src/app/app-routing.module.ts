import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiPageComponent } from './emoji-page/emoji-page.component';

const routes: Routes = [
  {path:'', component: EmojiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
