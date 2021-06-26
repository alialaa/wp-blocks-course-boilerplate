import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

const x = 0;

registerBlockType( 'create-block/boilerplate', {
	edit: Edit,
	save,
} );
