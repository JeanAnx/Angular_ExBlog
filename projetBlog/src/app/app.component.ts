import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    posts = [
      {
        title: 'Le premier post',
        content: 'Ceci est le texte du premier post. Sera-t-il "loved" par les lecteurs ? Nous le verrons bien. Voilà.',
        loveIts: 0,
        created_at: Date();
      },
      {
        title: 'Le second post',
          content: 'Ceci est le texte du second post. Sera-t-il "loved" par les lecteurs ? Nous le verrons bien. Voilà.',
        loveIts: 0,
        created_at: Date();
      }

    ]

}
