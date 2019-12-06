import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxFastOrganicLayout} = mx;

export class DOrganicLayout extends DLayout {
    static propTypes = {
        ...DLayout.propTypes,
        spacing: [Number, String],
    };

    defaults() {
        return {
            ...super.defaults(),
            spacing: 50,
        }
    }

    _getLayout(graph) {
        const {spacing} = this.get();
        const layout = new mxFastOrganicLayout(graph);

        layout.forceConstant = +spacing;
        
        return layout;
    }

    _execute(layout, cells, parent, graph) {
        if (!cells.length) return;

        let tmp = parent.cell;

        layout.execute(tmp);

        // if (graph.getModel().isVertex(tmp)) {
            // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
        // }
    }
}