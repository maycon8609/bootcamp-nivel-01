const { uuid } = require('uuidv4');
const projects = [{
  "id": "19c44238-5063-4d06-b7c9-1c81922436c3",
  "title": "projeto react-native",
  "owner": "maycon silva"
},
{
  "id": "88cfbce9-6701-4468-9570-32ba6eb764e8",
  "title": "landing page",
  "owner": "maycon silva"
},
{
  "id": "5cb5a4a3-dba6-49dc-8432-0c4c0950ab45",
  "title": "chat node",
  "owner": "maycon silva"
}];

class ProductController {
  async store(req, res){
    const { title, owner } = req.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return res.json(project);
  }

  async index(req, res){
    const { title } = req.query;

    const results = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

    return res.json(results);
  }

  async update(req, res){
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
      return res.status(400).json({ error: 'Project not found.'});
    }

    const project = {
      id,
      title,
      owner
    }

    projects[projectIndex] = project;

    return res.json(project);
  }

  async delete(req, res){
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
      return res.status(400).json({ error: 'Project not found.'});
    }

    projects.splice(projectIndex, 1);

    return res.status(204).send();
  }
};

module.exports = new ProductController();
