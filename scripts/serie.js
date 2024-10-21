export class Serie {
    id;
    name;
    channel;
    seasons;
    description;
    seriesUrl;
    imageUrl;
    constructor(id, name, channel, seasons, description, seriesUrl, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.seriesUrl = seriesUrl;
        this.imageUrl = imageUrl;
    }
}
;
