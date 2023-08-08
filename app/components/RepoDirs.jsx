import Link from 'next/link';
import React from 'react';



async function fetchRepoContents(name){
await new Promise((resolve)=>setTimeout(resolve,7000));

    const response =await fetch(`https://api.github.com/repos/thomasfrimpong/${name}/contents`,{
        next:{
            revalidate:60
        }
    });
const contents=await response.json();
return contents;
}

const RepoDirs =async ({name}) => {
    const contents=await fetchRepoContents(name);
    console.log(contents);
    
    const dirs=contents.filter((content)=>content.type=='dir');
  return (
    <div>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir)=>(
                <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                </li>
            )
                
            )}
        </ul>
      
    </div>
  )
}

export default RepoDirs
