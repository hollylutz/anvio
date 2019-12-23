import {
    GenomeViewer
} from './genomeViewer.js';

$(window).on("load", () => {
    init();
});

function init() {
    const genomeViewer = new GenomeViewer({
        'canvas': document.getElementById('canvas'),
    });

    window.genomeViewer = genomeViewer;

    fetch('/data/get_neighbors').then((response) => {
        response.json().then((data) => {

            for (const genome_name in data.contigs) {
                for (const contig_name in data.contigs[genome_name]) {
                    let contig_info = data.contigs[genome_name][contig_name];

                    genomeViewer.addContig(genome_name, {
                        'name': contig_name,
                        'length': contig_info.length
                    });

                }
            }

            data.genes.forEach((gene) => {
                genomeViewer.addGene(gene.genome_name, gene.contig, {
                    'gene_callers_id': gene['gene_callers_id'],
                    'start': gene['start'],
                    'stop': gene['stop'],
                    'direction': gene['direction']
                });
            });

            genomeViewer.handleResize();
            genomeViewer.center();
        });
    });
}