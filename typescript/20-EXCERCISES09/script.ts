async function fetCourses() {
  const res = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await res.json();

  handleCourses(json);
}

fetCourses();

interface iCourses {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  tags: string[];
}

function isCourses(value: unknown): value is iCourses {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCourses(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCourses).forEach((item) => {
      document.body.innerHTML += `
      <div>
      <h2>${item.nome}</h2>
      <p>Horas: ${item.horas} horas</p>
      <p>Tags: ${item.tags.join(', ')}</p>
      </div>
    `;
    });
  }
}
