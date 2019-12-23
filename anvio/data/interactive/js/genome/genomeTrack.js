import { Contig } from './contig.js';

class GenomeTrack {
    constructor(viewer, name) {
        this.viewer = viewer;
        this.name = name;
        this.contigs = [];
    }

    getContig(contigName) {
        let contig = this.contigs.find((contig) => contig.name == contigName);
        
        if (typeof result === 'undefined') {
            throw `Contig "${contigName} not found in the genome track "${this.name}"."`;
        }

        return result;
    }

    addContig(contigData) {
        let contig = new Contig(this.viewer);
        
        contig.name = contigData.name;
        contig.length = contigData.length;

        this.contigs.push(contig);
    }

    draw() {
        this.contigs.forEach((contig) => {
            contig.draw();
        });
    }
}


export { GenomeTrack };