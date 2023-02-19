import { SITE_NAME } from './const';

function formatTitle(name, siteName = SITE_NAME) {
	return name ? `${name} | ${SITE_NAME}` : SITE_NAME;
}

export { formatTitle };
