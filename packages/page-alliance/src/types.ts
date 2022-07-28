// Copyright 2017-2022 @polkadot/app-alliance authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletAllianceCid, PalletAllianceMemberRole } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

export interface Member {
  accountId: string;
  role: PalletAllianceMemberRole['type'];
}

export interface MemberInfo {
  accountId: string;
  deposit?: BN | null;
  isUpForKicking: boolean;
}

export interface Unscrupelous {
  accounts: string[];
  websites: string[];
}

export interface Cid {
  cid: PalletAllianceCid;
  ipfs: string;
  key: string;
}