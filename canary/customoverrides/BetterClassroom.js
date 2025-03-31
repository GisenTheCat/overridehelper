        const classroomRenames = Object.assign({
            'Hkk': 'Hemkunskap',
            'Idh': 'Idrott',
            'Ma': 'Matematik'
        }, [null].concat([
          'Español',
          'Français',
          'Deutsch',
          'Teknik',
          'NO',
          'SO',
          'Output',
          'Musik',
          'Bild',
          'English',
          'Svenska',
          'Slöjd',
          'Mentorsklassrum'
        ]).reduce((r, k) => ({
            ...r,
            [k]: k
        })));
        setInterval(() => {
            if (document.querySelector('.kXvNXe .asQXV.YVvGBb')) {
                document.querySelectorAll('.kXvNXe .asQXV.YVvGBb').forEach((e) => {
                    Object.keys(classroomRenames).forEach((name) => {
                        if (e.innerText.toLowerCase().includes(name.toLowerCase())) {
                            e.innerText = classroomRenames[name];
                            e.parentNode.parentNode.querySelector('.yXVLvd > .CNpREd > .OqAhgb.TGnLfc.A6dC2c.bFjUmb-Tvm9db').innerText = classroomRenames[name].substring(0, 1).toUpperCase();
                        }
                    });
                });
            }
            if (document.querySelector('.YVvGBb.z3vRcc-J3yWx.Pce5Kb')) {
                Object.keys(classroomRenames).forEach((name) => {
                    if (document.querySelector('.YVvGBb.z3vRcc-J3yWx.Pce5Kb').innerText.toLowerCase().includes(name.toLowerCase())) {
                        document.querySelector('.YVvGBb.z3vRcc-J3yWx.Pce5Kb').innerText = classroomRenames[name];
                        document.title = classroomRenames[name];
                    }
                });
            }
            if (document.querySelector('.y9bEQb > .dDKhVc.YVvGBb')) {
                document.querySelectorAll('.y9bEQb > .dDKhVc.YVvGBb').forEach((e) => {
                    Object.keys(classroomRenames).forEach((name) => {
                        if (e.innerText.toLowerCase().includes(name.toLowerCase())) {
                            e.innerText = classroomRenames[name];
                        }
                    });
                });
            }
            if (document.querySelector('.tNGpbb.YrFhrf-ZoZQ1.YVvGBb')) {
                document.querySelectorAll('.tNGpbb.YrFhrf-ZoZQ1.YVvGBb').forEach((e) => {
                    Object.keys(classroomRenames).forEach((name) => {
                        if (e.innerText.toLowerCase().includes(name.toLowerCase())) {
                            e.innerText = classroomRenames[name];
                        }
                    });
                });
            }
            if (document.querySelector('.VfPpkd-rymPhb-fpDzbe-fmcmS')) {
                document.querySelectorAll('.VfPpkd-rymPhb-fpDzbe-fmcmS').forEach((e) => {
                Object.keys(classroomRenames).forEach((name) => {
                    if (e.innerText.toLowerCase().includes(name.toLowerCase())) {
                        e.innerText = classroomRenames[name];
                    }
                });
            });
            }
            if (document.querySelector('.YVvGBb.z3vRcc-ZoZQ1')) {
            document.querySelectorAll('.YVvGBb.z3vRcc-ZoZQ1').forEach((e) => {
                Object.keys(classroomRenames).forEach((name) => {
                    if (e.innerText.toLowerCase().includes(name.toLowerCase())) {
                        e.innerText = classroomRenames[name];
                    }
                });
            });}
        }, 0)
