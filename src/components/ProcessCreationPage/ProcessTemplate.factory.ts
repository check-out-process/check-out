import { Config } from "../../config";

export const ProcessTemplateFactory = () => {
    return {
  'ט"נ ילדים': {
    processTemplateIsolationId: Config.processTemplateChildrenIcuId,
        processTemplateBedNonIsolationId: Config.processTemplateChildrenIcuId,
            processTypeId: Config.processTypeRegularBedId,
        }
    }
}