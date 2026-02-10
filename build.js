import fs from 'fs';

// Read the blog directory to get the list of blog posts
const getPosts = () => {
  const posts = [];
  fs.readdirSync('./blog/').map(fileName => {
    if (fileName.endsWith('.md')) {
      const fileContent = fs.readFileSync(`./blog/${fileName}`).toString();
      const frontMatter = fileContent.split('---')[1];
      if (!frontMatter.includes('title: ') || !frontMatter.includes('date: ')) {
        throw new Error(`File ${fileName} is missing required front matter fields (title, date).`);
      }

      if (frontMatter.includes('visibility: ') && frontMatter.split('visibility: ')[1].split('\n')[0].includes('hidden'))
        return;

      posts.push({
        url: fileName.replace('.md', ''),
        title: frontMatter.split('title: ')[1].split('\n')[0],
        date: frontMatter.split('date: ')[1].split('\n')[0],
        previewContent: fileContent.split('---')[2].replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, '').trim().slice(0, 500)
      });
    }
  });
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export default getPosts;