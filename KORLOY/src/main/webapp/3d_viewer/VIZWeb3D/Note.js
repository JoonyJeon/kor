VIZWeb3D['Note']=function(a,b,c){var d=this,e=new VIZWeb3D['EventDispatcher'](window,container);this['EventHandler']=e;var f=new THREE['Scene'](),g=new THREE['Scene'](),h=0xc8,i=-0xc8,j=0xc8,k=new THREE['OrthographicCamera'](-h,h,h,-h,i,j),l=a,m=0.02,n=0x2,o=0x5dc,p=0x14,q=0x0,r={'r':0xff,'g':0xff,'b':0xff,'a':0x1},s={'r':0xff,'g':0x0,'b':0x0,'a':0x1},t={'r':0xff,'g':0x0,'b':0x0,'a':0x1},u={'r':0x0,'g':0xff,'b':0x0,'a':0x1},v={'r':0x0,'g':0xff,'b':0x0,'a':0x1},w={'r':0xff,'g':0x0,'b':0x0,'a':0x1},x={'r':0xff,'g':0x0,'b':0x0,'a':0x1},y=function(){var ah={'id':l['Data']['UUIDv4'](),'type':REVIEW_TYPES['NONE'],'text':null,'points':[],'pointsBase':[],'mousepoints':[],'color':{'colLine':null,'colPoint':null,'colPick':null,'colBack':null,'colBorder':null,'colText':null},'obj':{'markers':[],'line':null,'arrows':[],'supportlines':[],'center':null,'text':null}};return ah;},z=new Map(),A=new THREE['Mesh'](new THREE['SphereGeometry'](n,0xa,0x14),new THREE['MeshBasicMaterial']({'color':new THREE['Color'](u['r']/0xff,u['g']/0xff,u['b']/0xff),'opacity':u['a']})),B=[A],C=new THREE['Object3D'](),D=new THREE['Object3D'](),E=new THREE['Object3D'](),F=new THREE['Object3D'](),G=new THREE['Object3D'](),H=new THREE['Geometry']();H['vertices']['push'](new THREE['Vector3']()),H['vertices']['push'](new THREE['Vector3']());var I=new THREE['LineBasicMaterial']({'color':new THREE['Color'](u['r']/0xff,u['g']/0xff,u['b']/0xff),'opacity':u['a']}),J=new THREE['Line'](H,I);this['ReviewType']=REVIEW_TYPES['NONE'],this['ReviewMode']=![];var K=![],L=![],M=[new THREE['Vector3'](),new THREE['Vector3'](),new THREE['Vector3'](),new THREE['Vector3']()],N=[new THREE['Vector3'](),new THREE['Vector3'](),new THREE['Vector3']()],O=[new THREE['Vector2'](),new THREE['Vector2'](),new THREE['Vector2']()];this['Start']=function(ah){d['ReviewMode']=!![],F['visible']=!![],A['visible']=![],d['ReviewType']=ah,q=0x0,Q(),R(!![]);},this['End']=function(){d['ReviewMode']=![],F['visible']=![],A['visible']=![],T(),q=0x0,R(![]),d['ReviewType']=REVIEW_TYPES['NONE'],d['EventHandler']['dispatchEvent'](EVENT_TYPES['Control']['Changed']);};function P(ah,ai){J['geometry']['vertices'][0x0]['copy'](ah),J['geometry']['vertices'][0x1]['copy'](ai),J['geometry']['verticesNeedUpdate']=!![];}function Q(){V=y(),W=new THREE['Object3D'](),X=new THREE['Object3D'](),$('#ui_note_text')['val']('');if(d['ReviewType']===REVIEW_TYPES['RK_2D_NOTE'])$('#ui_note_title')['html']('2D\x20Note');if(d['ReviewType']===REVIEW_TYPES['RK_3D_NOTE'])$('#ui_note_title')['html']('3D\x20Note');if(d['ReviewType']===REVIEW_TYPES['RK_SURFACE_NOTE'])$('#ui_note_title')['html']('Surface\x20Note');L=![];}function R(ah){var ai=$('#ui_note_div');if(ai['length']>0x0){if(d['ReviewType']===REVIEW_TYPES['RK_2D_NOTE']||d['ReviewType']===REVIEW_TYPES['RK_3D_NOTE']){if(ah)$('#ui_btn_note_select')['hide'](),$('#ui_note_div')['fadeIn'](0x1f4),$('#ui_note_div')['mouseover'](function(){l['Lock'](!![]);})['mouseout'](function(){l['Lock'](![]);});else $('#ui_note_div')['fadeOut'](0x1f4);}else{if(d['ReviewType']===REVIEW_TYPES['RK_SURFACE_NOTE']){if(ah)$('#ui_btn_note_select')['show'](),$('#ui_note_div')['fadeIn'](0x1f4),$('#ui_note_div')['mouseover'](function(){l['Lock'](!![]);})['mouseout'](function(){l['Lock'](![]);});else $('#ui_note_div')['fadeOut'](0x1f4);}}}}function S(){V['color']['colLine']={'r':r['r'],'g':r['g'],'b':r['b'],'a':r['a']},V['color']['colPoint']={'r':t['r'],'g':t['g'],'b':t['b'],'a':t['a']},V['color']['colPick']={'r':u['r'],'g':u['g'],'b':u['b'],'a':u['a']},V['color']['colBack']={'r':v['r'],'g':v['g'],'b':v['b'],'a':v['a']},V['color']['colBorder']={'r':w['r'],'g':w['g'],'b':w['b'],'a':w['a']},V['color']['colText']={'r':x['r'],'g':x['g'],'b':x['b'],'a':x['a']};for(var ah=0x0;ah<N['length'];ah++){V['points']['push'](new THREE['Vector3']()['copy'](N[ah]));}for(var ah=0x0;ah<M['length'];ah++){V['pointsBase']['push'](new THREE['Vector3']()['copy'](M[ah]));}V['type']=d['ReviewType'],z['set'](V['id'],V),A['visible']=![];}function T(){if(V!==undefined){for(var ah=0x0;ah<V['obj']['markers']['length'];ah++)l['Data']['Dispose'](V['obj']['markers'][ah]);for(var ah=0x0;ah<V['obj']['arrows']['length'];ah++)l['Data']['Dispose'](V['obj']['arrows'][ah]);for(var ah=0x0;ah<V['obj']['supportlines']['length'];ah++)l['Data']['Dispose'](V['obj']['supportlines'][ah]);l['Data']['Dispose'](V['obj']['text']),l['Data']['Dispose'](V['obj']['line']);}}this['DeleteAll']=function(){T();function ah(ai,aj,ak){if(ai!==undefined){for(var al=0x0;al<ai['obj']['markers']['length'];al++)l['Data']['Dispose'](ai['obj']['markers'][al]);for(var al=0x0;al<ai['obj']['arrows']['length'];al++)l['Data']['Dispose'](ai['obj']['arrows'][al]);for(var al=0x0;al<ai['obj']['supportlines']['length'];al++)l['Data']['Dispose'](ai['obj']['supportlines'][al]);l['Data']['Dispose'](ai['obj']['text']),l['Data']['Dispose'](ai['obj']['line']);}}z['forEach'](ah),z['clear'](),F['visible']=![],l['Render']();},this['SetOption']=function(ah){if(ah===undefined)ah={};r=ah['hasOwnProperty']('Color')?ah['Color']['Line']:r,t=ah['hasOwnProperty']('Color')?ah['Color']['Point']:t,u=ah['hasOwnProperty']('Color')?ah['Color']['Pick']:u,v=ah['hasOwnProperty']('Color')?ah['Color']['Back']:v,w=ah['hasOwnProperty']('Color')?ah['Color']['Border']:w,x=ah['hasOwnProperty']('Color')?ah['Color']['Text']:x,A['material']=new THREE['MeshBasicMaterial']({'color':new THREE['Color'](u['r']/0xff,u['g']/0xff,u['b']/0xff),'opacity':u['a']});},U();function U(){f['matrixAutoUpdate']=![],f['add'](b),f['add'](C),A['name']='marker',F['add'](A),F['visible']=![],C['add'](F),C['add'](D),C['add'](G),g['add'](E),$('#ui_btn_note_ok')['click'](function(ah){var ai=$('#ui_note_text')['val'](),aj=ai['split']('\x0a');if(ai['length']===0x0){alert('Please\x20enter\x20text.');return;}ai=aj,$('#ui_note_div')['fadeOut'](0x64);if(d['ReviewType']===REVIEW_TYPES['RK_2D_NOTE'])a0(ah,ai);else{if(d['ReviewType']===REVIEW_TYPES['RK_3D_NOTE'])Y(ah,ai);else{if(d['ReviewType']===REVIEW_TYPES['RK_SURFACE_NOTE'])V['text']=ai;}}K=!![];}),$('#ui_btn_note_cancel')['click'](function(ah){d['End'](),l['Toolbar']['Refresh'](),$('#ui_note_div')['fadeOut'](0x64);}),$('#ui_btn_note_select')['click'](function(ah){$('#ui_note_div')['fadeOut'](0x64),K=!![],L=!![];});}var V,W,X;function Y(ah,ai){var aj=a6(ai,{'fontsize':0xc,'backgroundColor':v,'borderColor':w,'textColor':x});aj['renderOrder']=0x3e7,aj['scale']['set'](o,o,o),V['text']=ai;var ak=l['Data']['GetMousePos'](ah);O[0x0]['copy'](ak);var al=l['Control']['Model']['Center'](),am=al['project'](b),an=new THREE['Vector3'](ak['x'],ak['y'],am['z'])['unproject'](b);M[0x0]['copy'](an),N[0x0]['copy'](ag(an)),aj['name']='marker',aj['position']=aj['position']['copy'](N[0x0]),X=aj,X['userData']=V,E['add'](X),V['obj']['text']=X;}function Z(ah,ai){var aj=new THREE['Mesh'](new THREE['SphereGeometry'](n,0x20,0x20),new THREE['MeshBasicMaterial']({'color':new THREE['Color'](t['r']/0xff,t['g']/0xff,t['b']/0xff),'opacity':t['a']}));aj['position']['copy'](A['position']),aj['userData']=new THREE['Vector3']()['copy'](M[0x0]),V['obj']['markers']=[aj],aj['name']='marker';var ak=new THREE['Geometry']();ak['vertices']['push'](new THREE['Vector3']()),ak['vertices']['push'](new THREE['Vector3']()),ak['vertices'][0x0]['copy'](ah),ak['vertices'][0x1]['copy'](ah),ak['verticesNeedUpdate']=!![];var al=new THREE['LineBasicMaterial']({'color':new THREE['Color'](r['r']/0xff,r['g']/0xff,r['b']/0xff),'opacity':r['a']});V['obj']['line']=new THREE['Line'](ak,al);var am=new THREE['Vector3']()['subVectors'](aj['position'],aj['position'])['normalize'](),an=new THREE['CylinderBufferGeometry'](0x0,0.2,0.6,0xc,0x1,![]);an['translate'](0x0,-0.3,0x0);var ao=new THREE['MeshBasicMaterial']({'transparent':!![],'side':THREE['DoubleSide'],'opacity':s['a'],'color':new THREE['Color'](s['r']/0xff,s['g']/0xff,s['b']/0xff)}),ap=new THREE['Mesh'](an,ao);a1(ap,am),ap['position']['copy'](aj['position']),V['obj']['arrows']=[ap],ap['name']='arrow';var aq=a6(ai,{'fontsize':0xc,'backgroundColor':v,'borderColor':w,'textColor':x});aq['renderOrder']=0x3e7,aq['scale']['set'](o,o,o),V['text']=ai;var ar=new THREE['Vector3'](aj['position']['x'],aj['position']['y'],aj['position']['z']);V['obj']['center']=ar,V['obj']['text']=aq,aq['name']='marker',aq['position']=aq['position']['copy'](ar),C['add'](V['obj']['markers'][0x0]),C['add'](V['obj']['arrows'][0x0]),W['add'](V['obj']['line']),X['userData']=V,C['add'](W),X=aq,V['obj']['text']=X,E['add'](X);}function a0(ah,ai){var aj=a6(ai,{'fontsize':0xc,'backgroundColor':v,'borderColor':w,'textColor':x});aj['renderOrder']=0x3e7,aj['scale']['set'](o,o,o),V['text']=ai;var ak=l['Data']['GetMousePos'](ah);O[0x0]['copy'](ak),V['mousepoints'][0x0]=new THREE['Vector2']()['copy'](ak),V['mousepoints'][0x1]=new THREE['Vector2']()['copy'](ak);var al=l['Control']['Model']['Center'](),am=al['project'](b),an=new THREE['Vector3'](ak['x'],ak['y'],am['z'])['unproject'](b);M[0x0]['copy'](an),N[0x0]['copy'](ag(an)),aj['name']='marker',aj['position']=aj['position']['copy'](N[0x0]),X=aj,X['userData']=V,V['obj']['text']=X,E['add'](X);}function a1(ah,ai){var aj=new THREE['Vector3'](),ak;if(ai['y']>0.99999)ah['quaternion']['set'](0x0,0x0,0x0,0x1);else ai['y']<-0.99999?ah['quaternion']['set'](0x1,0x0,0x0,0x0):(aj['set'](ai['z'],0x0,-ai['x'])['normalize'](),ak=Math['acos'](ai['y']),ah['quaternion']['setFromAxisAngle'](aj,ak));}function a2(ah){try{var ai=function(aj){var ak=[],al=[];if(aj['type']===REVIEW_TYPES['RK_SURFACE_NOTE']){for(var am=0x0;am<aj['pointsBase']['length'];am++){ak['push'](new THREE['Vector3']()['copy'](ag(aj['pointsBase'][am]))),al['push'](new THREE['Vector3']()['copy'](aj['pointsBase'][am])['project'](b));}var an=new THREE['Vector3']()['subVectors'](ak[0x0],ak[0x1])['normalize']();for(var am=0x0;am<aj['obj']['markers']['length'];am++){aj['obj']['markers'][am]['position']['copy'](ak[am]);}aj['obj']['line']['geometry']['vertices'][0x0]['copy'](ak[0x0]),aj['obj']['line']['geometry']['vertices'][0x1]['copy'](ak[0x1]),aj['obj']['line']['geometry']['verticesNeedUpdate']=!![],aj['obj']['text']['position']['copy'](new THREE['Vector3']()['copy'](ak[0x1]));}else{if(aj['type']===REVIEW_TYPES['RK_3D_NOTE']){for(var am=0x0;am<aj['pointsBase']['length'];am++){ak['push'](new THREE['Vector3']()['copy'](ag(aj['pointsBase'][am]))),al['push'](new THREE['Vector3']()['copy'](aj['pointsBase'][am])['project'](b));}aj['obj']['text']['position']['copy'](new THREE['Vector3']()['copy'](ak[0x0]));}}};z['forEach'](ai);}catch(aj){console['log'](aj);}}function a3(){var ah=l['Control']['Model']['Center']();if(ah!==null){var ai=ah['project'](b);for(var aj=0x0;aj<E['children']['length'];aj++){var ak=E['children'][aj];if(ak['userData']['type']===REVIEW_TYPES['RK_2D_NOTE']){var al=new THREE['Vector3'](ak['userData']['mousepoints'][0x0]['x'],ak['userData']['mousepoints'][0x0]['y'],-0x1)['unproject'](b),am=new THREE['Vector3'](ak['userData']['mousepoints'][0x1]['x'],ak['userData']['mousepoints'][0x1]['y'],-0x1)['unproject'](b),an=new THREE['Vector3']()['subVectors'](al,am),ao=new THREE['Vector3']();ak['position']['copy'](new THREE['Vector3']()['subVectors'](ao,an));var ap=new THREE['Vector3'](ak['userData']['mousepoints'][0x0]['x'],ak['userData']['mousepoints'][0x0]['y'],ai['z'])['unproject'](b);ak['children'][0x0]['position']['copy'](ap);}}}}function a4(ah,ai){var aj=new THREE['Vector3']()['copy'](ah)['project'](b);aj['y']-=ai;var ak=aj['unproject'](b),al=new THREE['Vector3']();return al['subVectors'](ah,ak),al['length']();}function a5(ah,ai){ai=ai||'Hg';var aj=$('<span>'+ai+'</span>')['css']({'font':ah}),ak=$('<div\x20style=\x22display:\x20inline-block;\x20width:\x201px;\x20height:\x200px;\x22></div>'),al=$('<div></div>');al['append'](aj,ak);var am=$('body');am['append'](al);try{var an={};ak['css']({'verticalAlign':'baseline'}),an['ascent']=ak['offset']()['top']-aj['offset']()['top'],ak['css']({'verticalAlign':'bottom'}),an['height']=ak['offset']()['top']-aj['offset']()['top'],an['descent']=an['height']-an['ascent'];}finally{al['remove']();}return an;};function a6(ah,ai){if(ai===undefined)ai={};var aj=ai['hasOwnProperty']('fontface')?ai['fontface']:'Arial',ak=ai['hasOwnProperty']('fontsize')?ai['fontsize']:0x12,al=ai['hasOwnProperty']('borderThickness')?ai['borderThickness']:0x0,am=ai['hasOwnProperty']('borderColor')?ai['borderColor']:{'r':0x0,'g':0x0,'b':0x0,'a':0x1},an=ai['hasOwnProperty']('backgroundColor')?ai['backgroundColor']:{'r':0xff,'g':0xff,'b':0xff,'a':0x1},ao=ai['hasOwnProperty']('textColor')?ai['textColor']:{'r':0x0,'g':0x0,'b':0x0,'a':0x1},ap=document['createElement']('canvas');ap['width']=0x800,ap['height']=0x800;var aq=ap['getContext']('2d');aq['font']=ak+'pt\x20'+aj;var ar;for(var as=0x0;as<ah['length'];as++){if(as===0x0)ar=aq['measureText'](ah[as]);else{if(ar['width']<aq['measureText'](ah[as])['width'])ar=aq['measureText'](ah[as]);}}var at=a5(aq['font'],ah[0x0]);aq['width']=ar['width'],aq['height']=at['height']*ah['length'],aq['fillStyle']='rgba('+an['r']+','+an['g']+','+an['b']+','+an['a']+')',aq['strokeStyle']='rgba('+am['r']+','+am['g']+','+am['b']+','+am['a']+')',aq['lineWidth']=al;var au=(ap['width']-ar['width'])/0x2,av=(ap['height']-at['height'])/0x2+at['height']/0x2,aw=0xa;a7(aq,al/0x2+au-aw+0x1,av-at['height'],aq['width']+aw*0x2,aq['height']+aw+aw/0x2,0x0),aq['fillStyle']='rgba('+ao['r']+','+ao['g']+','+ao['b']+','+ao['a']+')';for(var as=0x0;as<ah['length'];as++){aq['fillText'](ah[as],al/0x2+au,al/0x2+av+at['height']*as+aw/0x2);}var ax=new THREE['CanvasTexture'](ap);ax['needsUpdate']=!![];var ay=new THREE['SpriteMaterial']({'map':ax,'side':THREE['DoubleSide']}),az=new THREE['Sprite'](ay);return az;}function a7(ah,ai,aj,ak,al,am){ah['beginPath'](),ah['moveTo'](ai+am,aj),ah['lineTo'](ai+ak-am,aj),ah['quadraticCurveTo'](ai+ak,aj,ai+ak,aj+am),ah['lineTo'](ai+ak,aj+al-am),ah['quadraticCurveTo'](ai+ak,aj+al,ai+ak-am,aj+al),ah['lineTo'](ai+am,aj+al),ah['quadraticCurveTo'](ai,aj+al,ai,aj+al-am),ah['lineTo'](ai,aj+am),ah['quadraticCurveTo'](ai,aj,ai+am,aj),ah['closePath'](),ah['fill'](),ah['stroke']();}function a8(ah){var ai=new THREE['SpriteMaterial']({'color':0xffffff});return sprite=new THREE['Sprite'](ai),sprite['name']='snap',sprite['scale']['set'](0x5,0x5,0x1),sprite['position']['copy'](ah),sprite;}function a9(ah){if(!K)return;if(q<0x1){var ai=l['Data']['GetMousePos'](ah),aj=l['Control']['Model']['Center'](),ak=aj['project'](b),al=new THREE['Vector3'](ai['x'],ai['y'],ak['z'])['unproject'](b);M[0x0]['copy'](al),N[0x0]['copy'](ag(al)),V['obj']['text']['position']['copy'](N[0x0]),d['EventHandler']['dispatchEvent'](EVENT_TYPES['Control']['Changed']);}}function aa(ah){q=0x0,K=![],S(),d['ReviewType']=REVIEW_TYPES['NONE'],l['Toolbar']['Refresh']();}function ab(ah){if(!K)return;if(q<0x1){var ai=l['Picking']['PickInfo'](ah),aj=null;if(ai['length']>0x0){if(q===0x0)A['visible']=!![];M[q]['copy'](ai[0x0]['point']),N[q]['copy'](ag(ai[0x0]['point'])),B[q]['position']['copy'](ag(ai[0x0]['point']));var ak=0x0,al=ai[ak];if(al){var am=al['face'],an=al['point'],ao=al['object'];aj=d['findClosestVertex'](ao,an,m);}aj?(M[q]['copy'](aj),N[q]['copy'](ag(aj)),B[q]['position']['copy'](ag(aj)),B[q]['material']['color']=new THREE['Color'](0x1,0x0,0x0)):B[q]['material']['color']=new THREE['Color'](u['r']/0xff,u['g']/0xff,u['b']/0xff);}else{if(q===0x0)A['visible']=![];q===0x1&&(A['visible']=!![]);}d['EventHandler']['dispatchEvent'](EVENT_TYPES['Control']['Changed']);}else{var ap=l['Data']['GetMousePos'](ah),aq=new THREE['Vector3']()['copy'](M[0x0])['project'](b);M[0x1]=new THREE['Vector3'](ap['x'],ap['y'],aq['z'])['unproject'](b);var ar=[];for(var as=0x0;as<M['length'];as++){ar['push'](new THREE['Vector3']()['copy'](ag(M[as])));}V['obj']['line']['geometry']['vertices'][0x0]['copy'](ar[0x0]),V['obj']['line']['geometry']['vertices'][0x1]['copy'](ar[0x1]),V['obj']['line']['geometry']['verticesNeedUpdate']=!![];var at=new THREE['Vector3']()['subVectors'](ar[0x0],ar[0x1])['normalize']();a1(V['obj']['arrows'][0x0],at),X['position']['copy'](new THREE['Vector3']()['copy'](ar[0x1])),d['EventHandler']['dispatchEvent'](EVENT_TYPES['Control']['Changed']);}}function ac(ah){var ai=l['Picking']['PickInfo'](ah);if(q<0x1){if(ai['length']>0x0){var aj=0x0,ak=ai[aj];if(ak){var al=ak['face'],am=ak['point'],an=ak['object'];snap=d['findClosestVertex'](an,am,m);}snap?(M[q]['copy'](snap),N[q]['copy'](ag(snap)),B[q]['position']['copy'](ag(snap)),B[q]['material']['color']=new THREE['Color'](0x1,0x0,0x0)):(M[q]['copy'](ai[0x0]['point']),N[q]['copy'](ag(ai[0x0]['point'])),B[q]['position']['copy'](ag(ai[0x0]['point'])),B[q]['material']['color']=new THREE['Color'](0x0,0x1,0x0));P(ai[0x0]['point'],ai[0x0]['point']);var ao=l['Data']['GetMousePos'](ah);O[q]['copy'](ao),q++;if(q>0x0){var ap='';if(L)for(var aq=0x0;aq<ak['object']['userData']['length'];aq++){var ar=ak['object']['userData'][aq];if(ak['faceIndex']*0x3>=ar['m_triIdx']&&ak['faceIndex']*0x3<ar['m_triIdx']+ar['m_nTris']){var as;if(l['Configuration']['Model']['Selection']['Unit']===SELECT_UNIT['Part'])as=ar['partId'];else as=ar['bodyId'];var at=l['Data']['GetNode'](as);ap=at['data']['name']===null?'Body\x20'+at['data']['index']:at['data']['name'],ap=ap['split']('\x0a');break;}}else ap=V['text'];var au=new THREE['Vector3'](ao['x'],ao['y'],-0x1)['unproject'](b);au['z']=N[0x1]['z'],Z(N[0x0],ap);}}}else{var ao=l['Data']['GetMousePos'](ah);O[0x2]['copy'](ao),q=0x0,S(),K=![],d['ReviewType']=REVIEW_TYPES['NONE'],l['Toolbar']['Refresh']();}}function ad(ah){if(!K)return;if(q<0x1){var ai=l['Data']['GetMousePos'](ah),aj=l['Control']['Model']['Center'](),ak=aj['project'](b),al=new THREE['Vector3'](ai['x'],ai['y'],ak['z'])['unproject'](b);M[0x0]['copy'](al),N[0x0]['copy'](ag(al)),V['obj']['text']['position']['copy'](N[0x0]),V['mousepoints'][0x1]=new THREE['Vector2']()['copy'](ai),d['EventHandler']['dispatchEvent'](EVENT_TYPES['Control']['Changed']);}else q=0x0,K=![],S(),d['ReviewType']=REVIEW_TYPES['NONE'],l['Toolbar']['Refresh']();}function ae(ah){q=0x0,K=![],S(),d['ReviewType']=REVIEW_TYPES['NONE'],l['Toolbar']['Refresh']();}function af(ah){var ai=ah['width'],aj=ah['height'];ai/=0x2,aj/=0x2,k['left']=-ai,k['right']=ai,k['top']=aj,k['bottom']=-aj,k['updateProjectionMatrix']();}function ag(ah){var ai=new THREE['Vector3']()['copy'](ah)['project'](b),aj=ai['unproject'](k);return aj;}this['findClosestVertex']=function(ah,ai,aj){var ak=ah['geometry']['attributes']['position']['array'],al=[];for(var am=0x0;am<ak['length'];am=am+0x3){var an=new THREE['Vector3'](ak[am],ak[am+0x1],ak[am+0x2]);al['push'](an);}if(al['length']===0x0)return null;var ao,ap=null,aq=ah['worldToLocal'](ai['clone']());for(var am=0x0,ar=al['length'];am<ar;am++){ao=al[am]['distanceTo'](aq);if(ao>aj)continue;aj=ao,ap=al[am];}if(ap===null)return null;return ah['localToWorld'](ap);},this['onMouseDown']=function(ah){var ai;ah=ah||window['event'];if('which'in ah)ai=ah['which']===0x3;else{if('button'in ah)ai=ah['button']===0x2;}if(ai)return;if(d['ReviewType']===REVIEW_TYPES['RK_3D_NOTE'])aa(ah);else{if(d['ReviewType']===REVIEW_TYPES['RK_SURFACE_NOTE'])ac(ah);else d['ReviewType']===REVIEW_TYPES['RK_2D_NOTE']&&ae(ah);}},this['onMouseUp']=function(ah){K===![]&&(d['ReviewMode']=![],l['Toolbar']['Refresh']());},this['onMouseMove']=function(ah){if(d['ReviewType']===REVIEW_TYPES['RK_3D_NOTE'])a9(ah);else{if(d['ReviewType']===REVIEW_TYPES['RK_SURFACE_NOTE'])ab(ah);else d['ReviewType']===REVIEW_TYPES['RK_2D_NOTE']&&ad(ah);}},this['Render']=function(){c['autoClear']=![];var ah=l['Container']['getBoundingClientRect']();c['setViewport'](0x0,0x0,ah['width'],ah['height']),af(ah),radius=a4(new THREE['Vector3'](),m),a2(),c['clearDepth'](),c['render'](f,k),c['clearDepth'](),c['render'](g,k);};};