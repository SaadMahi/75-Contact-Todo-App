import { useState } from 'react';
import { Home, Form, ContactList } from './components';
import './globals.css';
import Dialog from './components/ui/Dialog';

function App() {
  const [form, showForm] = useState(false);
  const [contactList, showContactList] = useState(false);

  return (
    <>
      {contactList ? (
        <ContactList />
      ) : (
        <div className="bg-[url('/public/background.jpg')] bg-cover bg-no-repeat">
          <Home openForm={showForm} />
          {form && (
            <div>
              <Dialog>
                {
                  <Form
                    closeForm={showForm}
                    openContactList={showContactList}
                  />
                }
              </Dialog>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
