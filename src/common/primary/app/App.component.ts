import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Component, Inject, Vue, Watch } from 'vue-facing-decorator';

@Component
export default class AppComponent extends Vue {
  @Inject()
  private lenis!: () => any;

  @Inject()
  private globalWindow!: () => Window;

  @Watch('$route')
  onRouteChanged() {
    this.globalWindow().document.title = 'RK Game Pass';
    this.lenis().scrollTo('top', { duration: 0.5 });
  }

  created() {
    this.lenis().on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis().raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}
