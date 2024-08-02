const fs = require('fs');

const generateSitemap = () => {
    const urls = JSON.parse(fs.readFileSync('urls.json', 'utf-8'));
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => {
        const lastmod = new Date(`${url.lastmod}T00:00:00.000Z`).toISOString();
        return `
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${lastmod}</lastmod>
    </url>`;
    }).join('')}
</urlset>`;
    fs.writeFileSync('sitemap.xml', sitemap);
};

generateSitemap();
