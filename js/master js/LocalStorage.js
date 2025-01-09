import { stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js";
import { glory } from "./damageGlory.js";
import { dirs } from "./dirs.js";
import { boss } from "./BossItem.js";
import { showBossHp } from "./DamageBoss.js";
import { killBoss } from "./KillBoss.js";
function loadingData() {

    const dataEl = [
        {
            key: "hpGlory",
            do: value => {
                glory.hp = Number(value)
                stylehpBarWidth(dirs.hpBar, glory.hp)
            }
        },
        {
            key: "bossHp",
            do: value => {
                boss.hp = Number(value)
                showBossHp()
            }
        },
        {
            key: "IsAliveBoss",
            do: () => {
                killBoss()
            }
        },
        {
            key: "score",
            do: value => {
                styleHpBarTextContent(dirs.score, value)
                dirs.scoreEl = Number(value)
            }
        },
        {
            key: "highestScore",
            do: value => {
                dirs.higestScore = Number(value)
            }
        }

    ]
    dataEl.forEach(el => {

        const value = localStorage.getItem(el.key)
        if (value !== null) {
            el.do(value)
        }
    })
}
loadingData()