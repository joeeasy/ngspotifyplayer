import {Component} from '@angular/core';
// import { FormControl } from '@angular/forms'
import {SpotifyService} from "../services/spotify.service";

import { Artist } from '../../../Artist'
@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
 })

export class SearchComponent {
	searchStr: string;
	searchRes: Artist[];
	constructor(private _spotifyService: SpotifyService){}

	searchMusic() {
		 this._spotifyService.searchMusic(this.searchStr)
		 	.subscribe(res => {
		 		console.log(this.searchRes = res.artists.items);
		 		
		 	})
	}
}