async function fetchCursos() {
  const res = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await res.json();

  showCourses(data);
}

fetchCursos();

interface ICourse {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  tags: string[];
  nivel: 'iniciante' | 'avancado';
}

function showCourses(courses: ICourse[]) {
  courses.forEach((course) => {
    let color;
    if (course.nivel === 'iniciante') {
      color = 'blue';
    } else if (course.nivel === 'avancado') {
      color = 'red';
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${course.nome}</h2>
        <p>Horas: ${course.horas}</p>
        <p>Aulas: ${course.aulas}</p>
        <p>Tipo: ${course.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${course.tags.join(', ')}</p>
        <p>Aulas: ${course.idAulas.join(' | ')}</p>
      </div>
    `;
  });
}
