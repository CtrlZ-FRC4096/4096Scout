import { useMemo, useState } from 'preact/hooks';
import { Logo } from './components/Logo';
import QRModal from './components/QRModal';
import Section from './components/Section';
import Button, { Variant } from './components/core/Button';
import {
  getQRCodeData,
  resetSections,
  resetToDefaultConfig,
  uploadConfig,
  useQRScoutState,
} from './store/store';

export function App() {

  const formData = useQRScoutState(state => state.formData);

  // const [showQR, setShowQR] = useState(false);

  const missingRequiredFields = useMemo(() => {
    return formData.sections
      .map(s => s.fields)
      .flat()
      .filter(
        f =>
          f.required &&
          (f.value === null || f.value === undefined || f.value === ``),
      );
  }, [formData]);

  function getFieldValue(code: string): any {
    return formData.sections
      .map(s => s.fields)
      .flat()
      .find(f => f.code === code)?.value;
  }

  function download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text),
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function downloadConfig() {
    const configDownload = { ...formData };

    configDownload.sections.forEach(s =>
      s.fields.forEach(f => (f.value = undefined)),
    );
    download('QRScout_config.json', JSON.stringify(configDownload));
  }

  return (
    <div class="min-h-screen" data-theme="cz">
      <head>
        <title>4096 Scout|{formData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main class="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 class="text-6xl font-bold text-primary mt-4">
          {formData.page_title}
        </h1>

        <form className="w-full px-4 mb-8">
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {formData.sections.map(section => {
              return <Section key={section.name} name={section.name} />;
            })}

            <div className="card bg-base-300">
              <div className="card-body">
              <QRModal
                title={`${getFieldValue('robot')} - ${getFieldValue('matchNumber')}`}
                data={getQRCodeData()}
                isEnabled = {missingRequiredFields.length <= 0}
              />
              <button
                className="mt-4 btn btn-error btn-outline text-primary-content"
                type="button"
                onClick={() => resetSections()}
              >
                Reset
              </button>
              </div>
            </div>
            
            <div className="card bg-base-300">
              <div className="card-body">
                <button
                  class="btn btn-secondary"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      formData.sections
                        .map(s => s.fields)
                        .flat()
                        .map(f => f.title)
                        .join('\t'),
                    )}>
                    Copy Column Names
                </button>
                <button
                  class="btn btn-secondary mt-4"
                  type="button" 
                  onClick={() =>
                    downloadConfig()}>
                    Download Config
                </button>
                <label>
                  <span type="button" class="btn btn-secondary mt-4 w-full">Upload Config</span>
                  <input
                  type="file"
                  className="hidden h-0 m-0 p-0"
                  accept=".json"
                  onChange={e => uploadConfig(e)}
                />
                </label>
              </div>
            </div>
          </div>
        </form>
      </main>
      <footer class="footer footer-center p-10 bg-secondary text-secondary-content">
        <aside className="flex h-48 flex-col items-center justify-center p-2">
          <Logo />
          <p class="mt-2">4096 Scout | <a class="link" target="_blank" href="https://github.com/FRC2713/QRScout">Based on QRScout by Team 2713</a></p>
        </aside>
      </footer>
    </div>
  );
}
