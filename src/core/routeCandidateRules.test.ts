import { describe, it, expect } from "vitest";
import { isFulfilledCandidateRules } from "./routeCandidateRules";
import type { currentPathState } from "../types/currentPathState";

describe("isFulfilledCandidateRules", () => {
  it("同じ node_id を再訪問しようとしたら false を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["H15", "H16", "M17"],
      usedStationKeys: new Set([
        "higashiyama_koen",
        "motoyama",
      ]),
      transferCount: 1,
      constraintStationKeys: new Set([
        "motoyama",
      ]),
    };

    const nextNodeId = "H16";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(false);
  });

  it("同じ stationKey でも、同一駅内 transfer なら true を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["H15", "H16"],
      usedStationKeys: new Set([
        "higashiyama_koen",
        "motoyama",
      ]),
      transferCount: 0,
      constraintStationKeys: new Set<string>(),
    };

    const nextNodeId = "M17";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(true);
  });

  it("乗り換え回数が4回目になるなら false を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["H15", "H16"],
      usedStationKeys: new Set([
        "higashiyama_koen",
        "motoyama",
      ]),
      transferCount: 3,
      constraintStationKeys: new Set([
        "motoyama",
        "sakae",
        "kanayama",
      ]),
    };

    const nextNodeId = "M17";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(false);
  });

  it("stationKey 再訪問だが transfer ではないなら false を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["H16", "M18"],
      usedStationKeys: new Set([
        "motoyama",
        "nagoya_daigaku",
      ]),
      transferCount: 1,
      constraintStationKeys: new Set([
        "motoyama",
      ]),
    };

    const nextNodeId = "M17";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(false);
  });

  it("未使用の普通駅なら true を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["H15", "H16"],
      usedStationKeys: new Set([
        "kakuozan",
        "motoyama",
      ]),
      transferCount: 0,
      constraintStationKeys: new Set([
        "motoyama",
      ]),
    };

    const nextNodeId = "H17";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(true);
  });

  it("constraintStationKeys が6駅目になるなら false を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["S02"],
      usedStationKeys: new Set([
        "nagoya",
      ]),
      transferCount: 0,
      constraintStationKeys: new Set([
        "ozone",
        "kanayama",
        "motoyama",
        "sakae",
        "fukiage",
      ]),
    };

    const nextNodeId = "S03";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(false);
  });

  it("constraintStationKeys がちょうど5駅になるなら true を返す", () => {
    const currentPathState: currentPathState = {
      routeNodesIds: ["S02"],
      usedStationKeys: new Set([
        "nagoya",
      ]),
      transferCount: 0,
      constraintStationKeys: new Set([
        "ozone",
        "kanayama",
        "motoyama",
        "sakae",
      ]),
    };

    const nextNodeId = "S03";

    const result = isFulfilledCandidateRules(
      currentPathState,
      nextNodeId
    );

    expect(result).toBe(true);
  });
});