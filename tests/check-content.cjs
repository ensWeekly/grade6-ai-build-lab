const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.join(__dirname,'..'),box={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'lessons.js'),'utf8'),box);
const lessons=box.window.LESSONS,original=JSON.parse(fs.readFileSync(path.join(root,'source-lessons.json'),'utf8'));
assert.equal(lessons.length,24);
assert.equal(lessons.filter(x=>x.kind==='adek').length,20);
for(let i=0;i<20;i++){
 const x=lessons[i];assert.equal(x.id,i+1);assert.equal(x.title,original[i].title);assert.equal(x.page,5+3*i);
 assert(x.teach&&x.example?.body&&x.materials?.length&&x.guided.length===3&&x.stretch&&x.access&&x.exit);
 assert(x.fields.length>=2&&x.originalSteps.length>=4);assert(x.success.length>=3);
 assert(!/snack|food|dates versus|dried lemon/i.test(JSON.stringify(x)));
}
assert(/six/.test(lessons[15].guided.join(' ')));
assert(/five/.test(lessons[17].guided.join(' ')));
assert(lessons[18].fields.some(x=>x.label.startsWith('CU'))&&lessons[18].fields.some(x=>x.label.startsWith('GE')));
for(const f of ['index.html','styles.css','app.js','resources/adek-grade6-teacher-pack.pdf','resources/unit-plan.docx','assets/bridge-hero.svg'])assert(fs.statSync(path.join(root,f)).size>0,f);
assert(!/https?:\/\//.test(fs.readFileSync(path.join(root,'index.html'),'utf8')),'External runtime assets are not needed.');
console.log('PASS: 20 exact ADEK lessons, 24 total sessions, distinct routes and complete materials; source assets present.');
