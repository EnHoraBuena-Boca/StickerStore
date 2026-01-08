class OriginalCard < ApplicationRecord
  enum :cardtype, { Common: 0, Uncommon: 1, Rare: 2, Ultra_Rare: 3}

end
