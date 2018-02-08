import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import BreadcrumbItem from './item';

export default class Breadcrumb extends Intact {
    @Intact.template()
    static template = template;
}

export {Breadcrumb, BreadcrumbItem};