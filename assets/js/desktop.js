(function () {
    let controller = new ScrollMagic.Controller();
















    let scenea = new ScrollMagic.Scene({
        triggerElement: "#triggera",
        duration: "10%"
    })
        .setClassToggle('#animatea', 'active')
        .addTo(controller)
        .addIndicators({
            name: "a"
        })
    let sceneb = new ScrollMagic.Scene({
        triggerElement: "#triggerb",
        duration: "10%"
    })
        .setClassToggle('#animateb', 'active')
        .addTo(controller)
        .addIndicators({
            name: "b"
        })
    let scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: '+700',
        duration: "10%"
    })
        .setClassToggle('#animate1', 'active')
        .addTo(controller)
        .addIndicators({
            name: "1"
        })
    let scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        offset: '+700',
        duration: "10%"
    })
    .setClassToggle('#animate2', 'active')
        .addTo(controller)
        .addIndicators({
            name: "2"
        })
    let scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        offset: 1000,
        duration: "20%"
    })
    .setClassToggle('#animate3', 'active')
        .addTo(controller)
        .addIndicators({
            name: "3"
        })
    let scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        offset: 1000,
        duration: "20%"
    })
    .setClassToggle('#animate4', 'active')
        .addTo(controller)
        .addIndicators({
            name: "4"
        })
    let scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        offset: 950,
        duration: "20%"
    })
        .setTween(animate5)
        .addTo(controller)
        .addIndicators({
            name: "5"
        })
    let scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        offset: 950,
        duration: "20%"
    })
        .setTween(animate6)
        .addTo(controller)
        .addIndicators({
            name: "6"
        })
    let scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        offset: 950,
        duration: "20%"
    })
        .setTween(animate7)
        .addTo(controller)
        .addIndicators({
            name: "7"
        })
    let scene8 = new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        offset: 950,
        duration: "20%"
    })
        .setTween(animate8)
        .addTo(controller)
        .addIndicators({
            name: "8"
        })
    let scene9 = new ScrollMagic.Scene({
        triggerElement: "#trigger9",
        offset: 1280,
        duration: "20%"
    })
        .setTween(animate9)
        .addTo(controller)
        .addIndicators({
            name: "9"
        })
    let scene10 = new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        offset: 3000,
        duration: "20%"
    })
        .setTween(animate10)
        .addTo(controller)
        .addIndicators({
            name: "10"
        })
}())