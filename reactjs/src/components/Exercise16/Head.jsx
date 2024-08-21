import { useEffect } from 'react';

const Head = (props) => {
  useEffect(() => {
    
    document.title = 'Exercises Origamid - React | ' + props.title;
    document.querySelector('meta[name="description"]').setAttribute('content', props.description);
    // console.log(props);

  }, [props]);

  return (
    <>
    </>
  )
}

export default Head
