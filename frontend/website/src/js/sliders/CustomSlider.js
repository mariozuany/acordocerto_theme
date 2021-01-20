class CustomSlider {
    constructor() {
        this.xAxis = 0;
        this.counterIndex = 0;
        this.interval = 3000;
        this.mobileBreakpoint = 959;
        this.visibleAmount = document.documentElement.clientWidth >= this.mobileBreakpoint ? 3 : 1;
        this.articleList = document.querySelector('.article-list');
        this.articleListContainer = document.querySelector('.article-list--container');
        this.articles = document.querySelectorAll('.article');
        this.articlesArr = Array.from(this.articles);
        this.reset = false;
        this.transformSettings = {
            reset: 'translate3d(0, 0, 0)',
            newAxis(xAxis) {
                return `translate3d(${xAxis}px, 0, 0)`
            }
        }
    }

    async resetPosition() {
        await new Promise((resolve, reject) => {
            requestAnimationFrame(() => {
                this.articleList.style.transform = this.transformSettings.reset;
            });
            this.xAxis = 0;
            this.counterIndex = 0;
            resolve();
        });
    }

    async removeTransformClass() {
        await new Promise((resolve, reject) => {
            requestAnimationFrame(() => {
                this.articleList.classList.remove('transition');
                getComputedStyle(this.articleList).transition;
            });
            resolve();
        });
    }

    async translate() {
        await new Promise((resolve, reject) => {
            this.reset = false;

            this.xAxis -= this.articleWidth;
            this.counterIndex++;

            requestAnimationFrame(() => {
                this.articleList.style.transform = this.transformSettings.newAxis(this.xAxis);
                getComputedStyle(this.articleList).transition;
            });

            this.toggleTimerIndicator();
            resolve();
        });
    }

    toggleTimerIndicator() {
        requestAnimationFrame(() => {
            document.querySelector('.article.active').classList.remove('active');
            this.articles[this.counterIndex].classList.add('active');
            getComputedStyle(this.articleList).transition;
        });
    }

    async addTransitionClass() {
        await new Promise((resolve, reject) => {
            let interval = this.reset ? 0 : this.interval;
            
            requestAnimationFrame(() => {
                this.articleList.classList.add('transition');
                getComputedStyle(this.articleList).transition;
                setTimeout(() => {
                    resolve();
                }, interval);

            });
        });
    }

    async activateSlider() {
        this.articlesArr.slice(0, this.visibleAmount).forEach(el => this.articleList.appendChild(el.cloneNode(true)));
        this.articles[0].classList.add('active');
        this.articleList.style.width = `${this.articleWidth * this.articles.length}px`;
        this.articleListContainer.style.height = `${parseFloat(window.getComputedStyle(this.articles[0]).height)}px`;
        this.articles = this.articleList.querySelectorAll('.article');
        this.marginRight = parseFloat(window.getComputedStyle(this.articles[0]).marginRight);
        this.marginLeft = parseFloat(window.getComputedStyle(this.articles[0]).marginLeft);
        this.articleWidth = this.articles[0].clientWidth + this.marginRight + this.marginLeft;

        for (let i = 0; i <= this.articles.length; i++) {
            
            await this.addTransitionClass();
            await this.translate();

            if (this.visibleAmount + i >= this.articles.length) {
                console.log('entrou na condicao');
                await this.removeTransformClass();
                await this.resetPosition();
                this.reset = true;
                i = -1;
            }
        }
    }

    init() {
        // document.querySelector('.button').addEventListener('click', () => {
            window.addEventListener('load', () => {
                this.activateSlider();
            });
        // });
    }
}

export default CustomSlider;