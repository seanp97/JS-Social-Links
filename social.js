
class Socials {

    constructor(elem, size, color) {
        this._elem = elem;
        this._size = size;
        this._color = color;

        setTimeout(() => {
            this._svgElemTag = document.querySelectorAll(`${this._elem} a`);
            this._svgElemTag.forEach(tagEl => {
                tagEl.style.width = 'fit-content';
            });
        }, 10);

        if(this._size) {
            setTimeout(() => {
                this._svgs = document.querySelectorAll(`${this._elem} a svg`);
                this._svgs.forEach(svg => {
                    svg.setAttribute("height", `${this._size}px`);
                    svg.setAttribute("width", `${this._size}px`)
                });
            }, 10);
        }

        if(this._color) {
            setTimeout(() => {
                this._svgElems = document.querySelectorAll(`${this._elem} a`);
                this._svgElems.forEach(linkElem => {
                    linkElem.style.color = `${this._color}`;
                });
            }, 10);
        }

    }

    BlockLayout() {
        this._tags = document.querySelectorAll(`${this._elem} a`);
        this._tags.forEach(tag => {
            tag.style.display = 'block';
        })
    }

    #ValidURL(urlStr) {
        this._urlStr = urlStr;
        this.url;
        
        try {
            this.url = new URL(this._urlStr);
        } catch (ex) {
          console.log('Not valid URL'); 
        }
      
        return this.url.protocol === "http:" || this.url.protocol === "https:";
      }

    #InsertInElem(html) {
        this._html = html;
        document.querySelector(this._elem).insertAdjacentHTML('beforeend', this._html);
    }

    Instagram(link) {
        this._instagramLink = link;
        this._instagramHTML = `<a style="color: #000" href="${this._instagramLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>`;

        if(this._instagramLink && this.#ValidURL(this._instagramLink)) {
            this.#InsertInElem(this._instagramHTML);
        }
    }

    Facebook(link) {
        this._facebookLink = link;
        this._facebookHTML = `<a style="color: #000" href="${this._facebookLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>`;

        if(this._facebookLink && this.#ValidURL(this._facebookLink)) {
            this.#InsertInElem(this._facebookHTML);
        }
    }
    
    Twitter(link) {
        this._twitterLink = link;
        this._twitterHTML = `<a style="color: #000"; href="${this._twitterLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>`;

        if(this._twitterLink && this.#ValidURL(this._twitterLink)) {
            this.#InsertInElem(this._twitterHTML);
        }
    }

    Twitch(link) {
        this._twitchLink = link;
        this._twitchHTML = `<a style="color: #000" href="${this._twitchLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg></a>`;

        if(this._twitchLink && this.#ValidURL(this._twitchLink)) {
            this.#InsertInElem(this._twitchHTML);
        }
    }

    YouTube(link) {
        this._youTubeLink = link;
        this._youTubeHTML = `<a style="color: #000"; href="${this._youTubeLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>`;

        if(this._youTubeLink && this.#ValidURL(this._youTubeLink)) {
            this.#InsertInElem(this._youTubeHTML);
        }
    }

    LinkedIn(link) {
        this._linkedInLink = link;
        this._linkedInHTML = `<a style="color: #000" href="${this._linkedInLink}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>`;

        if(this._linkedInLink && this.#ValidURL(this._linkedInLink)) {
            this.#InsertInElem(this._linkedInHTML);
        }
    }

    Email(link) {
        this._emailLink = link;
        this._emailHTML = `<a style="color: #000" href="mailto:${this._emailLink}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>`;

        this.#InsertInElem(this._emailHTML);
    }

    Phone(tel) {
        this._phoneTel = tel;
        this._phoneHTML = `<a style="color: #000" href="tel:${this._phoneTel}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>`;

        this.#InsertInElem(this._phoneHTML);  
    }

}