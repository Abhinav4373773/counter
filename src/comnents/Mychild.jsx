import { createPortal } from 'react-dom';

function Mychild() {
  return createPortal(
    <div>
      Welcome
    </div>,
    document.body
  );
}
export default Mychild;