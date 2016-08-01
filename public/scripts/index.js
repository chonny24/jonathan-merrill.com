const ContentBox = React.createClass({
  render: function () {
    const contentBoxStyle = {
      padding: '2%',
      position: 'relative',
      borderRadius: '5px',
      minHeight: '75%',
      margin: '2% 10% 2% 5%',
      backgroundColor: 'white',
      boxShadow: '0px 1px 4px 0px lightslategray',
      fontSize: 'medium',
      borderLeft: 'lightseagreen solid 3px'
    }
    return (
      <div className='pageContents' style={contentBoxStyle}>
        {this.props.children}
      </div>
    )
  }
})

const ContentContainer = React.createClass({
  render: function () {
    const contentContainerStyle = {
      backgroundColor: 'rgb(250,250,250)',
      width: 'calc(100% - 150px)',
      minWidth: 'calc(480px - 150px)',
      height: '95%',
      left: '150px',
      position: 'fixed',
      overflow: 'scroll'
    }
    return (
      <div className='contentContainer' style={contentContainerStyle}>
        <ContentBox>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu elementum magna, quis euismod ex. Sed vel sollicitudin diam. Phasellus libero ante, gravida at nunc ut, maximus rutrum dolor. Aenean varius at orci eu commodo. Morbi volutpat euismod massa quis vehicula. Phasellus erat metus, aliquet quis lectus sed, tempus luctus enim. Integer eu elit id sem pretium dictum. Morbi in commodo justo.

Nam laoreet viverra lacus, at tempus turpis tincidunt eu. Vivamus ac ex odio. Ut congue dignissim justo, quis rhoncus felis porttitor ut. Donec lorem est, porta quis sem vel, rutrum pulvinar nunc. Etiam eu urna elit. Nullam vitae nunc ultrices, hendrerit lorem ut, pharetra mi. Fusce malesuada lacinia ipsum, a tempor lacus tincidunt ac. Mauris mollis ac nibh ut efficitur. Sed eu diam a ligula suscipit aliquet quis a libero. Sed tristique eget ipsum eget rutrum. In hac habitasse platea dictumst. Sed malesuada et augue et vehicula. Proin consequat sapien nec bibendum faucibus. Proin massa nibh, sagittis et ante vel, posuere scelerisque justo. Vivamus ac diam arcu. Quisque elementum rutrum orci sit amet iaculis.

Praesent non arcu sed ante dapibus interdum eget eget diam. Morbi velit libero, finibus sed enim ac, vulputate lacinia tellus. Praesent nec odio ut justo porta rhoncus. Etiam vestibulum ligula vitae porttitor mattis. Praesent ac porttitor augue. Quisque neque augue, vehicula vitae tempor a, blandit porttitor metus. Integer vel aliquet orci.

Aliquam et pellentesque est. Duis ligula nisi, imperdiet id condimentum at, varius ut enim. Nullam sollicitudin eget justo ut tempor. Phasellus tempor est feugiat quam sodales, in tincidunt ex suscipit. Donec iaculis ac odio quis finibus. Proin lobortis tincidunt mi, in molestie justo sodales eu. Donec lacinia lacinia risus vel ullamcorper. Duis id cursus massa. Nulla a auctor lectus. Fusce sodales turpis non orci semper, id maximus leo cursus. Morbi fermentum imperdiet nulla id ullamcorper.

Sed efficitur purus id orci lobortis, non mattis libero eleifend. Donec id nisi non velit placerat viverra. Morbi finibus sapien eu augue dapibus tincidunt. Duis blandit eu nisi eget mollis. Integer dapibus id urna dictum vulputate. Donec ultrices nec erat id dignissim. Curabitur rhoncus tellus non ipsum maximus luctus. Pellentesque eget luctus purus, eget faucibus ipsum. Aliquam sit amet semper ligula, nec lobortis metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Vestibulum porttitor ex at aliquam sagittis. Quisque maximus eleifend libero a elementum. Fusce iaculis turpis nec erat condimentum venenatis. Integer aliquet ligula elit, id sodales lorem placerat quis. Integer feugiat est nisi, vel suscipit leo pellentesque imperdiet. Nullam egestas auctor est eget hendrerit. Nullam eget nisl mi. Nunc vitae mauris vel dui vulputate condimentum vel ut libero. Mauris vitae turpis sed est mollis convallis. Sed non sapien eros. Aenean egestas odio in nisl iaculis dapibus. Donec interdum odio eu posuere convallis.

Donec turpis turpis, ullamcorper quis risus ut, ullamcorper faucibus orci. Pellentesque pellentesque orci lorem, in interdum sem volutpat non. Integer sagittis nisi nisl, in eleifend nisl sodales ut. Proin malesuada cursus mauris, a imperdiet neque. Nullam suscipit velit blandit rutrum aliquet. Pellentesque congue tellus quis purus mollis, non convallis ipsum condimentum. Integer felis lorem, vehicula a tempus ut, convallis quis mauris. Etiam dapibus sem sed porta varius. Pellentesque fermentum sem in pharetra condimentum. Aenean eu sem dui. Donec vel urna dapibus ex consectetur posuere. Nulla ut nunc mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Suspendisse et sagittis libero. Sed blandit efficitur ex mattis consequat. Praesent pellentesque dolor dui, at suscipit neque semper at. Nulla vel tellus sapien. Aliquam ac fringilla nunc. Suspendisse nec neque tellus. Nam non tellus in mi tincidunt vehicula. Quisque suscipit gravida tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tortor at arcu volutpat mollis ac sit amet purus.

Nullam vestibulum a diam sit amet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum diam a tortor gravida, at tempus sapien finibus. Proin convallis hendrerit justo, at efficitur mauris commodo at. Fusce at purus arcu. Proin tincidunt faucibus quam, eu auctor eros interdum in. Integer mi arcu, pulvinar nec euismod placerat, aliquam a ipsum. Curabitur blandit libero ut nunc molestie, eu tincidunt justo ultricies. Cras suscipit elit consectetur purus pretium mollis. Fusce id varius mi. Nulla luctus imperdiet ipsum ut condimentum. Cras nec elit lectus. Etiam in lorem felis.

Vivamus fringilla scelerisque odio, a venenatis orci consectetur et. Nunc est nunc, vulputate ultricies turpis posuere, ultrices varius orci. Vivamus nec leo nisl. Morbi ac convallis ante, faucibus finibus mi. Vestibulum a enim ornare, maximus turpis at, porta massa. Sed tellus nisl, tempor quis aliquam sit amet, convallis sit amet nibh. Integer eget lacus nec erat pretium tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus quam nisl, tincidunt mollis lacus viverra non. Aenean tincidunt laoreet ultrices. Vestibulum auctor lorem est, a semper nisi iaculis sit amet. Vestibulum ut ligula faucibus, maximus dui eu, finibus massa. Donec metus est, pretium sollicitudin volutpat in, dignissim sed metus. Vivamus id nisi sem. Curabitur in tortor nunc.

Etiam semper eget diam ac tincidunt. Sed ac mi ut nibh accumsan aliquam at eget ex. Morbi egestas pellentesque nunc, vel laoreet risus fringilla ut. Donec et mauris et elit tristique sagittis. Sed id odio aliquam, tempor libero in, sagittis nulla. Suspendisse tincidunt scelerisque massa, at volutpat dolor interdum eget. Cras egestas bibendum odio id placerat. Cras non augue lorem. Phasellus et erat neque. Morbi hendrerit, massa non volutpat scelerisque, est mi tincidunt ligula, sit amet pretium elit nulla nec enim. Suspendisse dictum leo at neque tincidunt, euismod sodales nisl ullamcorper. Integer at pulvinar justo. Mauris ac leo nec orci molestie cursus.

Fusce eu nibh at erat euismod pretium. Ut euismod velit nec felis consectetur malesuada. Duis porta, felis sit amet pulvinar congue, sem dolor mattis ligula, ut convallis lectus arcu eget massa. Vestibulum sit amet urna eu nibh finibus finibus. Duis sem purus, porta at velit ac, malesuada aliquam dui. Aliquam sodales purus non pharetra vehicula. Donec semper lobortis ante in pharetra. Sed finibus lacus vel orci hendrerit tristique. Duis iaculis rhoncus mattis. Phasellus a sem ut magna vulputate bibendum laoreet in sapien. Curabitur pulvinar at enim in vehicula.

Donec placerat diam eget rutrum gravida. Cras sodales ultricies risus, vitae mattis massa hendrerit nec. Ut ullamcorper sem iaculis justo interdum, finibus laoreet sapien lobortis. Cras viverra dignissim consectetur. Proin cursus viverra nisl. Etiam eu finibus felis. Fusce commodo metus nulla, eget vehicula tortor pretium eu. Nunc dapibus nisi ac justo rhoncus, ac consequat velit dapibus.

Pellentesque eu justo risus. Donec sit amet fringilla tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio at ligula accumsan porttitor. Suspendisse potenti. Ut varius faucibus nisi, a vehicula ipsum ullamcorper eget. Maecenas ut pretium nunc. Nullam bibendum augue at justo pretium, nec suscipit mauris consectetur. Pellentesque hendrerit vitae libero eu cursus. Proin lacinia nisl ut purus eleifend, ut euismod nisl convallis. Vivamus eros nibh, porta a orci nec, eleifend egestas dui. Mauris non rutrum lorem. Pellentesque vitae nisi ac sapien volutpat ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam neque mauris, eleifend ut lacinia quis, fermentum eu nisl.

Aenean quis vehicula nunc, at fermentum ligula. Curabitur consectetur sapien in sem venenatis sodales. Integer est quam, fermentum eu ex sit amet, tincidunt tincidunt felis. Mauris consectetur consequat tellus in consequat. Sed rutrum turpis at sapien porta tristique. Nulla ipsum augue, malesuada vel mollis a, volutpat in metus. Curabitur fermentum mi massa, ut congue augue maximus condimentum. Donec quis scelerisque orci, ut euismod nibh. Sed molestie, quam sed dictum congue, eros ante pulvinar felis, a molestie nisi lectus sit amet ante.

Vivamus condimentum diam nunc, nec imperdiet purus eleifend et. Pellentesque sit amet neque gravida, scelerisque ligula vel, pharetra elit. Nunc elementum congue orci, eget egestas urna. Phasellus iaculis varius lorem non euismod. Vivamus a diam vitae nulla porta efficitur. In congue erat a tortor mattis eleifend. Aliquam felis purus, molestie ut ipsum vel, tristique scelerisque nisl.

Sed eu ante odio. Ut gravida, leo quis lacinia fringilla, est nulla fermentum arcu, at congue turpis enim at tellus. Mauris at purus varius, imperdiet nulla congue, faucibus nibh. Maecenas cursus metus in molestie sollicitudin. Donec augue lectus, cursus ut varius eget, euismod eget sapien. Nulla tempor pellentesque commodo. Nulla eleifend nisl et nunc tincidunt, ut pulvinar mauris volutpat. Curabitur tempor nulla pretium, suscipit tellus quis, venenatis ex. Vestibulum diam neque, malesuada vel enim quis, ultrices lacinia arcu. Duis vestibulum suscipit dui in blandit. Quisque nec sem pulvinar, ultrices tortor eu, pretium ipsum.

Quisque tincidunt, est nec gravida interdum, metus lacus pretium quam, a vestibulum arcu dui a velit. Donec dapibus semper aliquet. Vivamus efficitur non arcu et scelerisque. Maecenas et ante eget urna lobortis volutpat vel id magna. Mauris purus eros, facilisis vel consectetur nec, pulvinar in tellus. Sed a arcu arcu. Vestibulum faucibus orci quis vulputate sodales. Cras sapien nibh, accumsan ut risus vitae, finibus sagittis lacus. Curabitur augue nulla, porttitor id urna eu, egestas aliquet nisi. Mauris sed lorem vitae est ultricies mattis id at urna. Vestibulum posuere tincidunt arcu ac consequat. Nullam ut odio ac velit iaculis convallis sed vitae velit. Proin id lacus non augue laoreet gravida. Nullam ultrices nec dolor nec sollicitudin. Nullam quis metus vitae risus interdum lacinia vitae sed purus.

Suspendisse commodo, nunc sit amet semper pharetra, lectus eros vulputate lectus, vel malesuada ipsum mi a enim. Donec laoreet semper eros eu pharetra. Etiam a mattis elit, at maximus leo. Aenean et nibh elit. Ut vel erat erat. Fusce turpis eros, interdum eget tellus ac, tempor laoreet lorem. Nulla ut metus sed mauris porttitor placerat congue sit amet massa. Nunc convallis, urna quis aliquam blandit, purus nisl pulvinar ex, sit amet rhoncus libero dolor sit amet sapien. Quisque et ligula enim. Cras nibh erat, placerat vel orci sit amet, accumsan efficitur libero. Vivamus feugiat consequat erat, in fringilla magna tincidunt id. Vivamus at placerat nisl. Sed ut tortor dui. In blandit scelerisque diam, in venenatis velit tempor et. Phasellus commodo tortor ut quam pretium, et commodo risus rhoncus.

Vestibulum orci tellus, scelerisque nec consequat at, consectetur eget velit. Phasellus sed accumsan est. Nunc consequat justo ut diam commodo mollis. Proin vulputate diam non venenatis interdum. Curabitur sed ligula vestibulum, finibus urna vel, hendrerit velit. Vestibulum eu sagittis purus, sed pellentesque sapien. Integer finibus volutpat porttitor. Quisque lobortis arcu nec augue mattis egestas. Nunc purus ex, vehicula quis lacinia ut, dapibus vel odio. Suspendisse potenti. Sed et lorem nec turpis ultrices blandit. In tempus metus sagittis augue pellentesque, non eleifend felis vulputate. Quisque imperdiet pellentesque semper. In at mauris molestie, mattis quam a, convallis justo. Maecenas laoreet arcu neque, et rhoncus mauris aliquam id. Sed vitae tellus accumsan, mattis est quis, malesuada libero.

Suspendisse efficitur non nulla euismod pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a turpis ut sem tempus faucibus consequat id augue. Vivamus eget viverra arcu. Mauris ut enim ac libero luctus molestie vel et lacus. Maecenas id erat ultrices, finibus mi id, commodo arcu. Fusce scelerisque dignissim mi ut egestas. Ut est ipsum, sodales sit amet eros vitae, lacinia tempor tortor. Praesent fermentum justo pretium augue porta mollis. Fusce leo eros, pretium sit amet semper ut, sodales quis ipsum. Praesent sed ipsum odio. Vivamus luctus mollis orci non cursus. Vestibulum nec dictum diam. Nam feugiat est in nisl porttitor, vel ornare dolor elementum. Aenean luctus leo vitae urna ultrices, sit amet luctus tellus cursus. Integer quis turpis et leo fermentum pretium.

Praesent commodo erat nec elit ultrices, id faucibus nibh vulputate. Phasellus at tortor luctus elit fermentum eleifend. Donec nec augue nec augue accumsan molestie. Aenean id felis ut sem blandit mollis. Nulla cursus, ante ac luctus facilisis, nunc turpis fermentum ante, id sagittis leo dui at ex. Suspendisse ultrices lacus sapien. Ut volutpat iaculis congue. Nam dictum pellentesque lectus sed pellentesque. Sed hendrerit, neque id bibendum vulputate, leo dui ullamcorper mi, nec dignissim erat erat pharetra quam. Vestibulum tincidunt rhoncus lacus, a consequat nunc. Pellentesque semper tortor augue, non interdum diam pulvinar id. Aliquam iaculis purus at ullamcorper condimentum. Quisque a ante eget tellus tristique pretium. Nullam porta erat et est sagittis, ac mollis dui ultricies. Vivamus commodo vitae dui eget aliquam.

Phasellus pellentesque rutrum diam, ac bibendum nibh imperdiet id. Donec sapien nisi, aliquam sed finibus ac, aliquam eu velit. Duis ullamcorper sit amet est id ullamcorper. Sed ipsum ligula, consectetur a orci ut, dapibus placerat velit. Pellentesque dapibus purus odio, sit amet sollicitudin mi elementum condimentum. Mauris consequat ipsum eget quam elementum, iaculis condimentum mi tincidunt. Sed maximus suscipit fermentum. Nullam sit amet arcu felis. Nulla malesuada massa nibh, id porttitor sem condimentum ac. Morbi pharetra est a malesuada suscipit.

Vestibulum tellus velit, venenatis nec congue at, dignissim sit amet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum quis magna a leo faucibus pulvinar. Nulla eu molestie sem, ut congue metus. Praesent mattis porttitor blandit. Mauris mollis dapibus imperdiet. Nulla eget congue ante. Morbi at nisi efficitur, tristique mauris vitae, interdum justo. Morbi tincidunt dapibus felis, in aliquam elit laoreet feugiat. In nec scelerisque diam, imperdiet dictum risus. Proin posuere turpis sed sem ornare cursus. Sed quis lorem mi. Curabitur non est vitae risus auctor semper.

Maecenas interdum lectus in augue tempor, at pretium orci vulputate. Donec semper leo vel suscipit volutpat. Pellentesque consequat vel nibh sed feugiat. Sed pellentesque quam ac massa accumsan eleifend. Maecenas at viverra libero. Nam nec efficitur lorem, ut tempor arcu. Pellentesque blandit massa non sem rutrum commodo. Etiam a orci est. Phasellus dapibus ac risus at venenatis. Pellentesque molestie odio eget aliquam dapibus. Aenean ipsum leo, tempus id ex consectetur, ultrices tincidunt neque. Maecenas euismod elit ac metus pellentesque, quis gravida elit tempor. Morbi pretium orci et dui pharetra, in venenatis quam fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a vehicula mauris, a cursus eros.

Cras egestas quam in dui fringilla pharetra. Pellentesque in mauris sollicitudin, rhoncus purus in, viverra augue. Nunc tellus mi, suscipit sed sem sit amet, varius tempor erat. Vivamus fringilla consequat sodales. Nullam sed magna mollis, consequat orci nec, ornare augue. Maecenas imperdiet blandit leo, at pharetra nibh lacinia ut. Fusce efficitur nibh quis lectus consequat suscipit.

Fusce vitae dignissim felis, vitae ornare eros. Donec a aliquet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eleifend a mauris a vulputate. Mauris commodo urna sed arcu iaculis, sit amet viverra eros blandit. Cras rhoncus aliquet eleifend. Donec fringilla pharetra ante vel dignissim.

Ut vitae turpis in lectus viverra volutpat sit amet eu est. Praesent suscipit faucibus ex, venenatis rutrum mi molestie nec. Maecenas semper tellus orci, nec ultricies nunc lacinia ultricies. Proin vitae dui ornare, tristique purus sed, molestie enim. Curabitur cursus blandit nisl, eget porttitor elit interdum sed. Mauris nulla erat, mollis placerat tellus eget, facilisis mattis erat. Vestibulum quis auctor erat, mattis blandit tortor. Maecenas et convallis nisi. Praesent tempor mi eget neque varius ultrices a sed justo. Suspendisse a cursus nulla. Nullam gravida pellentesque nisl, vel placerat ex pretium nec.

Integer ut nunc id odio auctor vulputate. Aenean lacinia porttitor lacus, in pharetra eros commodo et. Vivamus ac metus a lacus vulputate varius. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in commodo ligula, ac eleifend leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi placerat neque nec massa dictum, in malesuada magna elementum. Duis tempus consequat lectus, eu fringilla elit condimentum et. Proin vitae neque rhoncus, consequat lacus at, elementum nisi. Nullam pretium turpis nec velit scelerisque pellentesque. Nullam viverra urna lorem.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam pulvinar sit amet neque in dignissim. Proin rutrum lobortis orci quis euismod. Cras suscipit venenatis nisl. Proin at est varius, vulputate nibh vel, tempus augue. Integer blandit augue sit amet dignissim ornare. Fusce id aliquam felis, vel tincidunt tortor. Vestibulum at elementum ligula, in rhoncus odio. Aliquam eget magna metus. Etiam eu justo tincidunt, suscipit massa in, tempus risus. Praesent tempus magna ipsum, at aliquet elit dictum quis. Nulla ut enim magna. Mauris a nisl nisi. Donec viverra semper ipsum eu commodo. Maecenas placerat venenatis erat, in pellentesque tellus blandit a. Pellentesque pretium libero quis nulla scelerisque fermentum.
        </ContentBox>
      </div>
    )
  }
})

const Sidebar = React.createClass({
  render: function () {
    const menuStyle = {
      paddingBottom: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      textAlign: 'right',
      fontFamily: 'courier new'
    }
    const selectedMenuStyle = {
      paddingBottom: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      textAlign: 'right',
      fontFamily: 'courier new',
      backgroundColor: 'lightseagreen',
      boxShadow: '-1px 4px 6px 0px lightgray'
    }
    return (
      <div className='sidebar' style={{fontSize: 'large', height: '100%', left: '0', position: 'fixed', width: '150px'}}>
        <div style={menuStyle}>
          LinkedIn
        </div>
        <div style={menuStyle}>
          GitHub
        </div>
        <div style={menuStyle}>
          Projects
        </div>
        <div style={selectedMenuStyle}>
          Blog
        </div>
        <div style={menuStyle}>
          Resume
        </div>
      </div>
    )
  }
})

const TopBar = React.createClass({
  render: function () {
    return (
      <div className='topBar' style={{minWidth: '480px', color: 'slategray', height: '5%', paddingLeft: '90px', fontFamily: 'courier new', fontSize: 'xx-large'}}>
        Jonathan Merrill
      </div>
    )
  }
})

const SiteContainer = React.createClass({
  render: function () {
    return (
      <div className='siteContainer'>
        <TopBar />
        <Sidebar />
        <ContentContainer />
      </div>
    )
  }
})

ReactDOM.render(
    <SiteContainer />,
    document.getElementById('content')
)
