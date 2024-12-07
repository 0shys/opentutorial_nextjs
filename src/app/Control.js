"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export function Control() {
  const parms = useParams();
  const router = useRouter();
  const id = parms.id;
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={"/update/" + id}>Update</Link></li>
        <li><input type="button" value="delete" onClick={()=>{
          const options = {method : 'DELETE'};
          fetch('http://localhost:9999/topics/' + id, options)
          .then(resp=>resp.json())
          .then(result=>{
              router.push('/');
              router.refresh();
          });
        }}/></li>
      </> : null}
    </ul>
  );
}
