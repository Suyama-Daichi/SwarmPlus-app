import { useData } from '../../renderer/useData';
export { Page };

function Page() {
  const data = useData();
  console.log(data);
  return <>ホーム画面</>;
}
