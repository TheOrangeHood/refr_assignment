import { Component, OnInit } from '@angular/core';




export interface Emoji {
  id: number,
  text: string,
  url: string,
  color: string
}


@Component({
  selector: 'app-emoji-page',
  templateUrl: './emoji-page.component.html',
  styleUrls: ['./emoji-page.component.css']
})

export class EmojiPageComponent implements OnInit {

  constructor() { }

  // color = '#FF8661'
  black_text = ''
  emoji_list: Emoji[] = [
    {
      id: 1,
      text: 'Friendly',
      url: '🤩',
      color: '#FF8661'
    },
    {
      id: 2,
      text: 'Pocket friendly',
      url: '🤑',
      color: '#FFA58A'
    },
    {
      id: 3,
      text: 'Friendly staff',
      url: '🤝',
      color: '#FFBEAA'
    },
    {
      id: 4,
      text: 'Great Cocktails',
      url: '🍹',
      color: '#C9EEFF'
    },
    {
      id: 5,
      text: 'Long Lasting',
      url: '🤩',
      color: '#9EE0FF'
    },
    {
      id: 6,
      text: 'Friendly Staff',
      url: '🤝',
      color: '#4BC1FF'
    },
    {
      id: 7,
      text: 'Good Ambience',
      url: '😍',
      color: '#FFA58A'
    },
    {
      id: 8,
      text: 'Prompt service',
      url: '👌',
      color: '#FFBEAA'
    },
    {
      id: 9,
      text: 'Vegan',
      url: '🥒',
      color: '#FFD7CB'
    },
    {
      id: 10,
      text: 'Good Music',
      url: '🎹',
      color: '#FFF09C'
    },
    {
      id: 11,
      text: 'LGBTQ+',
      url: '🏳‍🌈',
      color: '#FFF4B4'
    },
    {
      id: 12,
      text: 'Friendly Staff',
      url: '🤝',
      color: '#4BC1FF'
    },
    {
      id: 13,
      text: 'Cruelty free',
      url: '🐕',
      color: '#FFF5BB'
    },
    {
      id: 14,
      text: 'Pocket friendly',
      url: '🤑',
      color: '#BAFFCA'
    },
    {
      id: 15,
      text: 'Friendly staff',
      url: '🤝',
      color: '#FFBEAA'
    },
    {
      id: 16,
      text: 'Great Cocktails',
      url: '🍹',
      color: '#C9EEFF'
    },
    {
      id: 17,
      text: 'Long Lasting',
      url: '🤩',
      color: '#BAFFCA'
    },
    {
      id: 18,
      text: 'Friendly Staff',
      url: '🤝',
      color: '#4BC1FF'
    },
    {
      id: 19,
      text: 'Friendly',
      url: '🤩',
      color: '#FF8661'
    },
    {
      id: 20,
      text: 'Pocket friendly',
      url: '🤑',
      color: '#FFA58A'
    },
    {
      id: 21,
      text: 'Friendly staff',
      url: '🤝',
      color: '#FFBEAA'
    },
    {
      id: 22,
      text: 'Great Cocktails',
      url: '🍹',
      color: '#C9EEFF'
    },
    {
      id: 23,
      text: 'Long Lasting',
      url: '🤩',
      color: '#9EE0FF'
    },
    {
      id: 24,
      text: 'Friendly Staff',
      url: '🤝',
      color: '#4BC1FF'
    },
  ]
  // emojisSelected = false
  selected_emoji_list: Emoji[] = []

  ngOnInit(): void {
  }

  addOrRemove = (emoji: Emoji) => {
    var index = this.selected_emoji_list.map(e => e.id).indexOf(emoji.id)
    // console.log(this.selected_emoji_list)
    // if(index)
    console.log(index)

    if (index != -1) {
      this.selected_emoji_list.splice(index, 1)
      console.log(this.selected_emoji_list)
      var s_emoji = document.getElementById(emoji.id.toString()) as HTMLDivElement
      s_emoji.classList.remove('selected')
      this.calculate_black_text()
    }
    else {
      if (this.selected_emoji_list.length < 3) {
        this.selected_emoji_list.push(emoji)
        console.log(this.selected_emoji_list)
        var s_emoji = document.getElementById(emoji.id.toString()) as HTMLDivElement
        s_emoji.classList.add('selected')
        this.calculate_black_text()
      }
    }
  }

  calculate_black_text = () => {
    for (let index = 0; index < this.selected_emoji_list.length; index++) {
      const element = this.selected_emoji_list[index];
      if (index == 0) {
        this.black_text = this.selected_emoji_list[0].text;
      }
      else {
        this.black_text = this.black_text + ', ' + this.selected_emoji_list[index].text
      }
    }
  }

}
