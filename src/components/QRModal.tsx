import QRCode from 'qrcode.react';

export interface QRModalProps {
  title: string;
  data: string;
  isEnabled: boolean;
}

export default function QRModal(props: QRModalProps) {
  return (
    <>
    <button
            className={"btn btn-primary text-primary-content " + (!props.isEnabled ? "btn-disabled" : "") }
            type="button"
            onClick={(props.isEnabled ? ()=>document.getElementById('DataModal').showModal() : ()=>{})}
          >
            COMMIT
          </button>
    <dialog id="DataModal" class="modal">
      <div class="modal-box bg-white w-fit flex flex-col items-center text-base-300">
        <h1 className="text-4xl">{props.title.toUpperCase()}</h1>
        <QRCode className="m-2 my-4" size={256} value={props.data} />
        <div className="flex w-full flex-row items-center justify-center gap-4">
            <div class="btn"
              onClick={() =>
                navigator.clipboard.writeText(props.data + '\n')
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>

            </div>
            <button
              className="btn btn-error text-error-content"
              type="button"
              onClick={()=>document.getElementById('DataModal').close()}
            >
              Close
            </button>
          </div>
      </div>

    {/* <div
        className="fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50"
        id="my-modal"
      />
      <div className="fixed top-20 rounded-md border bg-white p-5 shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">{props.title.toUpperCase()}</h1>
          <QRCode className="m-2 mt-4" size={256} value={props.data} />
          <div className="mt-4 flex w-full flex-row items-center justify-between">
            <div
              onClick={() =>
                navigator.clipboard.writeText(props.data + '\n')
              }
            >
              <svg
                className="mr-4 h-8 w-8 text-gray-500 hover:text-gray-800 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <rect x="8" y="8" width="12" height="12" rx="2" />{' '}
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
            </div>
            <button
              className="focus:shadow-outline rounded bg-red-rhr py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none"
              type="button"
              onClick={()=>document.getElementById('DataModal').close()}
            >
              Close
            </button>
          </div>
        </div>
      </div> */}


    </dialog>
      
    </>
  );
}
