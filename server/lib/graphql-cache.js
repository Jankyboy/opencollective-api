export const purgeCacheForCollectiveOperationNames = [
  'CollectivePage',
  'BudgetSection',
  'TransactionsPage',
  'ExpensesPage',
  'CollectiveCover',
  'CollectiveBannerIframe',
];

export function getGraphqlCacheKey(req) {
  if (!req.body || !req.body.operationName) {
    return;
  }
  if (!req.body.variables || !req.body.variables.slug) {
    return;
  }
  switch (req.body.operationName) {
    case 'BudgetSection':
    case 'CollectivePage':
    case 'CollectiveCover':
    case 'CollectiveBannerIframe':
      return `${req.body.operationName}_${req.body.variables.slug}`;
    case 'TransactionsPage':
      if (req.body.variables.offset === 0 && req.body.variables.limit === 15) {
        return `${req.body.operationName}_${req.body.variables.slug}`;
      }
      break;
    case 'ExpensesPage':
      if (req.body.variables.offset === 0 && req.body.variables.limit === 10) {
        return `${req.body.operationName}_${req.body.variables.slug}`;
      }
      break;
  }
}
