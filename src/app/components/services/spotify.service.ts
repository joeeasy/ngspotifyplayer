import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	private searchUrl: string;
	private artistUrl: string;
	private albumsUrl: string;
	private albumUrl: string;
	private clientId: string = 'dc6dd926dfb04a8baab76d3a92c7003c';
	private clientSecret: string = 'b4748162198b4a85a4ab43dbf912f2a0';
	private authToken: string ='BQDawxy3iADufmstPk1yPBK-sFNm4SK_WIwTjufqEfw8FmYe0UNY-EMbugAAtOA_pQBzx8oyg8kpjvIDk32DYVwDhmhB_yRCj24ELDEkbL7fw3ms_D1x98QVjRvKS_APERu3dW8JUrABrZp6cNcsQMt9dW3E51xyAm4-povlRDRWCbMXE-JnrDbJowabL2HGf87Jcyw1MKFGXOEojd5nur0y17SMCxgcQ3TQzu0fBTFcVvyC0nyEvzxrQPbzD467xrd-UseHJG-JB6AKo_Xc3kb1xQ2SSkpPqcfGGsvQ-dp87lHLgLfzM2Ev2Z6Ov3go5-eg_Nk';


	constructor(private _http: Http) {

	}
	searchMusic(str:string, type='artist') {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		// let authToken ='BQAxtYSEow3StBjShgbc03gXBLaCnaXlE3EKNsY7z3xGwyzmUDeiagoVFDoBEt5ywkWCL0-bX9vFPjljU7vFvRVElZhwzQ04Egqv6HCJykX4MgJI23sZhhWIH762XAka4v6wkDlLLy-mMPkRe0yA_rlo4OzITq0WtuHpz8xepUKEDCCODffbYl_NDKGcUx3S8kihh47rF7WUxEM5jMcRy-eqEl3y7zANUU7NE6dVy_oLswVR3rFg331ExqWX2If3rA1dh4J4gkWpgXP9ph2-ahxVlW7eNkKsWdLB5ZSg7WppGbqyrWVW7DEFkbVaipPgDxqMWiM';
		headers.append('Authorization', `Bearer ${this.authToken}`);

		this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=artist&limit=10&client_id='+this.clientId+'&client_secret='+this.clientSecret;
		return this._http.get(this.searchUrl, { headers })
			.map(res=>  res.json());
	}

 getArtist(id: string) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', `Bearer ${this.authToken}`);

		this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
		return this._http.get(this.artistUrl, { headers })
			.map(res=>  res.json());
	}
	getAlbums(artistId: string) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		// let authToken ='BQAxtYSEow3StBjShgbc03gXBLaCnaXlE3EKNsY7z3xGwyzmUDeiagoVFDoBEt5ywkWCL0-bX9vFPjljU7vFvRVElZhwzQ04Egqv6HCJykX4MgJI23sZhhWIH762XAka4v6wkDlLLy-mMPkRe0yA_rlo4OzITq0WtuHpz8xepUKEDCCODffbYl_NDKGcUx3S8kihh47rF7WUxEM5jMcRy-eqEl3y7zANUU7NE6dVy_oLswVR3rFg331ExqWX2If3rA1dh4J4gkWpgXP9ph2-ahxVlW7eNkKsWdLB5ZSg7WppGbqyrWVW7DEFkbVaipPgDxqMWiM';
		headers.append('Authorization', `Bearer ${this.authToken}`);

		this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
		return this._http.get(this.albumsUrl, { headers })
			.map(res=>  res.json());
	}
	getAlbum(id: string) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		// let authToken ='BQAxtYSEow3StBjShgbc03gXBLaCnaXlE3EKNsY7z3xGwyzmUDeiagoVFDoBEt5ywkWCL0-bX9vFPjljU7vFvRVElZhwzQ04Egqv6HCJykX4MgJI23sZhhWIH762XAka4v6wkDlLLy-mMPkRe0yA_rlo4OzITq0WtuHpz8xepUKEDCCODffbYl_NDKGcUx3S8kihh47rF7WUxEM5jMcRy-eqEl3y7zANUU7NE6dVy_oLswVR3rFg331ExqWX2If3rA1dh4J4gkWpgXP9ph2-ahxVlW7eNkKsWdLB5ZSg7WppGbqyrWVW7DEFkbVaipPgDxqMWiM';
		headers.append('Authorization', `Bearer ${this.authToken}`);

		this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
		return this._http.get(this.albumUrl, { headers })
			.map(res=>  res.json());
	}
}
 