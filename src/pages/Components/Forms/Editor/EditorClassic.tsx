import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditorClassic = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Classic Editor" pageTitle="Forms" />

                <div className="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                    Notes: <a href="https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html" className="font-medium underline">https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html</a> more details
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Classic CKEditor</h6>
                        <div className="ckeditor-classic text-slate-800">
                            <CKEditor
                                editor={ClassicEditor}
                                data={`
                  <h3>The three greatest things you learn from traveling</h3>
                  <p><br data-cke-filler="true"></p>
                  <p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
                  <p><br data-cke-filler="true"></p>
                  <h4>Appreciation of diversity</h4>
                  <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
                  <p><br data-cke-filler="true"></p>
                  <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist. But when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
                  <p><br data-cke-filler="true"></p>
                  <ul>
                      <li> buy the ticket</li>
                      <li> <i>start your adventure</i></li>
                  </ul>
                `}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditorClassic;
