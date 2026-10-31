import type { PageData } from './site';

export const RECENT_PAGES: Record<string, PageData> = {
  'moonlighter-2-hotfix-1-retest-guide': {
    slug: 'moonlighter-2-hotfix-1-retest-guide',
    title: 'Moonlighter 2 Hotfix 1 Guide: Stability, Quest, and Dungeon Fixes',
    description: 'A practical retest route for Moonlighter 2 Hotfix 1: DirectX 11 or 12, the Weapon Mastery marker, tutorial freezes, Senda, and dungeon recovery.',
    kicker: 'Version 1.0 · Hotfix 1',
    status: 'Launch-day update',
    intro: 'Moonlighter 2 Hotfix 1 addresses stability, progression, enemies, weapons, armor, dungeons, and text issues reported around the version 1.0 release. The most useful way to apply it is to update first, choose one symptom, and retest the exact activity that failed. This guide turns the patch notes into a safe checklist without treating a fixed bug as a new strategy.',
    sections: [
      { heading: 'Install the patch before repeating a risky run', paragraphs: [
        'Close the game and let your platform complete the update before loading a valuable save. The patch addresses issues that could crash after a main quest, freeze while returning to Tresna during the tutorial, or leave a dungeon run unrecoverable. Those are different failure points, so write down where the original problem occurred. A title-screen version check, if your build displays one, is a better baseline than assuming an update downloaded because the client was open.',
        'After updating, load the same profile and repeat only the action connected to the original symptom. Do not immediately delete a save, reinstall, or abandon a quest. If the failure no longer occurs, continue normally and keep a note of the new build. If it persists, capture the quest name, location, platform, and the last action before the freeze or crash. That makes a remaining issue distinguishable from an old report reproduced on an outdated install.'
      ]},
      { heading: 'Choose DirectX 11 or DirectX 12 with a controlled comparison', paragraphs: [
        'Hotfix 1 adds a choice between DirectX 11 and DirectX 12 because some instability and performance problems may be related to the graphics API. There is no universal best option in the notes. Start with the setting currently selected, play a repeatable section, and record whether the issue is a crash, a frame-rate drop, or a hitch during a transition. Then switch APIs, restart if the game requests it, and repeat the same section with the same resolution and graphics settings.',
        'Do not change the API, resolution, upscaler, frame cap, and graphics preset all at once. If several variables change, a smoother run cannot tell you which setting mattered. Keep the first configuration written down so you can restore it. A result on one GPU does not prove the other API is slower or less stable on every PC. If neither option changes the symptom, preserve the log and report the hardware and driver state instead of repeatedly toggling settings without a controlled test.'
      ]},
      { heading: 'Recover the tutorial return to Tresna', paragraphs: [
        'The patch fixes a loading-screen freeze that could happen when returning to Tresna during the tutorial. If your tutorial save previously stopped on that transition, update and try the normal return once before changing files. Wait for the transition to finish and avoid force-closing the game while the storage indicator or loading screen is still active. If the town loads correctly, check the quest journal and confirm that the tutorial step advanced before leaving the area.',
        'If the loading screen still hangs, note whether the freeze happens every time or only on one save. Record the platform, API selection on PC, and whether you changed the route or equipment before returning. Do not assume a later-game loading freeze has the same cause as this tutorial-specific case. A precise report keeps the known fix narrow and helps identify whether another transition issue remains.'
      ]},
      { heading: 'Use the Weapon Mastery marker as navigation, not a quest reset', paragraphs: [
        'Hotfix 1 corrects the Weapon Mastery quest marker when it pointed to the wrong location. Reopen the journal after updating, select the quest, and follow the current marker rather than an old screenshot or community route. If the marker leads somewhere unexpected, compare the displayed quest text with the map label and check whether another objective is active. A marker correction changes navigation guidance; it does not imply that the quest requirements or reward were redesigned.',
        'When a quest remains incomplete, identify the exact stage and the interaction the journal asks for. Revisit the corrected destination, inspect nearby interactable objects, and check whether the objective text changes. Avoid repeating every earlier step unless the journal says to. If the marker and objective disagree after the patch, preserve a screenshot of both and report the mismatch. That is more useful than restarting the whole quest and potentially obscuring the broken state.'
      ]},
      { heading: 'Test the Babyl and Spark route without creating another blocker', paragraphs: [
        'The patch fixes Babyl sometimes being duplicated, which could make Spark almost impossible to reach when Babyl had not yet been unlocked. This is a dependency and navigation edge case. If you are approaching that part of the story, check the journal and unlock state before moving between the characters. Do not assume that seeing a duplicate means you have unlocked the intended route; confirm the relevant interaction and objective state in the menu.',
        'If Spark still cannot be reached, record whether Babyl is unlocked, how many copies or markers appear, and which objective is active. Use the main quest path shown in the current build and avoid deleting local progress to work around a world-state issue. The patch note describes the specific combination that caused the obstruction. It does not say that all character interactions or every blocked door are related to this fix.'
      ]},
      { heading: 'Retest Senda and other named enemy fixes', paragraphs: [
        'Hotfix 1 fixes Senda not taking poison damage from gadget shots during the second phase. To verify it, reach the second phase, use the relevant poison gadget, and watch for the game’s damage response. Do not test in the first phase and conclude that the second-phase correction failed. Keep the gadget, target phase, and attack sequence consistent if you compare attempts.',
        'The same patch changes several other named cases: Sergeant Roberto should react when shot from a distance; the Chapter 4 turret should no longer stay in its firing animation after being tased; and tased Electric Slimes should not continue dealing electric-field damage. Test each in its stated context. A turret that was not tased, a slime whose status expired, or a close-range shot on Roberto does not reproduce the exact issue described.'
      ]},
      { heading: 'Protect a run from dungeon-specific edge cases', paragraphs: [
        'The update fixes a spot in Kalina where Will could fall out of the map and become stuck, and another Gallery obstacle that could trap him. It also restores Barrier Blessing shield charges when retrying a dungeon and fixes certain legendary-chest rewards after miniboss victories. These changes affect different parts of a run: geometry, retry state, and reward generation. Check which one matches your situation before leaving or restarting.',
        'After a miniboss, open the reward chest and confirm the reward appears before moving on. When retrying with Barrier Blessing, inspect the displayed shield state before taking another encounter. If a character becomes stuck, try the normal movement and camera controls once, then record the exact obstacle and room rather than repeatedly forcing the same position. A route guide should note the fixed obstruction only when it has been retested on the patched build.'
      ]},
      { heading: 'Check the remaining weapon, armor, and text corrections', paragraphs: [
        'Hotfix 1 corrects a crash caused by a specific combination of Wound and Ignite perks, spearhead projectiles freezing in midair when reaching Will, the second greatsword’s sharpness drain, and a mismatch between The Vow’s description and behavior. It also fixes an invincibility edge case during boss fights after equipping Scarabastion. These are not blanket changes to every perk, weapon, or armor effect.',
        'If you use one of those combinations, note your loadout before testing and change one item at a time. Read the current description for The Vow rather than copying an older tooltip. The update also corrects placeholder/debug text and a misspelling in the Shared Secret relic description in English and Portuguese. Text corrections can help identify the installed build, but they do not necessarily change the relic’s underlying function.'
      ]},
      { heading: 'A clean post-hotfix checklist', paragraphs: [
        'Update; back up your normal save through the platform’s supported method; choose one symptom; repeat the matching quest, enemy, or dungeon event; and note the current graphics API if you are on PC. Confirm quest completion in the journal, check a reward before leaving its room, and avoid mixing several settings changes into one test. If the game still fails, preserve the save and record the exact steps rather than wiping progress.',
        'The patch is broad, but each fix is specific. Treat the corrected Weapon Mastery marker as a marker fix, the Senda note as a second-phase poison case, and the loading freeze as a tutorial return issue. That precision lets you benefit from Hotfix 1 without inventing a new route or assuming every similar-looking problem has already been solved.'
      ]},
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1 Patch Notes', description: 'The complete fix list organized by game system.' },
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Plan an extraction route and preserve your loot.' },
      { href: '/moonlighter-2-bag-before-the-door/', title: 'Empty the Bag First', description: 'A safer way to manage a run before returning to Tresna.' },
    ],
    sources: [],
  },
  'moonlighter-2-directx-stutter-test': {
    slug: 'moonlighter-2-directx-stutter-test',
    title: 'Moonlighter 2 DirectX 11 vs 12: A Safe Stutter and Crash Test',
    description: 'Compare Moonlighter 2 DirectX 11 and 12 after Hotfix 1 with a repeatable PC test for crashes, loading, frame pacing, and graphics settings.',
    kicker: 'PC troubleshooting · Hotfix 1',
    status: 'Launch-day update',
    intro: 'Moonlighter 2 Hotfix 1 adds a DirectX 11 or DirectX 12 option because some players’ crashes and performance problems may be tied to the API. Neither choice is declared universally better. Use a controlled comparison to find the more reliable option on your own PC, preserve a baseline, and avoid risking a valuable dungeon run while you test.',
    sections: [
      { heading: 'Start with the symptom you are trying to solve', paragraphs: [
        'Before changing the graphics API, decide whether your problem is a crash, a long loading screen, a visible hitch, unstable frame pacing, or a low average frame rate. Those symptoms are related but not interchangeable. A game that crashes during a transition needs a different observation from a game that runs continuously but stutters when entering a new room. Write down where the problem occurs and whether it began after the version 1.0 release or after a later driver change.',
        'Use a save and route that you can repeat without risking a full backpack. If the issue happens while returning to Tresna, test that transition from a low-value run. If it happens in combat, choose a familiar room and avoid taking rare loot. This makes the comparison both safer and easier to interpret. Do not use a single crash-free session as proof that the problem is permanently gone; repeat the same action several times before calling the result stable.'
      ]},
      { heading: 'Record a baseline before switching APIs', paragraphs: [
        'Write down the current DirectX selection, display resolution, window mode, frame cap, graphics preset, upscaling option, GPU driver version, and whether the game is installed on an SSD. These are practical context fields, not claims that every one causes the same issue. Keep the graphics options unchanged while you compare APIs. If you update a driver, change a frame cap, and switch APIs together, you will not know which change affected the outcome.',
        'Choose one repeatable scenario: load the same area, follow the same path, trigger the same transition, or perform the same number of combat actions. If the problem is intermittent, use a short series of repeated runs and count how often it appears. Record the time to reach the area only if loading is the symptom you are measuring. A simple log with date, API, scenario, and result is more useful than a broad note that the game “felt smoother.”'
      ]},
      { heading: 'Change the API and restart cleanly', paragraphs: [
        'Select the alternate DirectX option in the game’s settings and follow any restart prompt. Close the game fully before relaunching if the setting requires a restart. Then repeat the baseline scenario with the same save and unchanged graphics options. Watch for the original symptom first. A higher frame-rate counter does not settle a crash test, and a crash-free route does not prove that a visual hitch improved.',
        'Run the scenario more than once because the first pass after switching may include shader or asset work. If the game requests a shader cache rebuild, let it finish before comparing later runs. Keep the first API result even if it is worse; you need both sides of the comparison to choose responsibly. If the alternate API fails to launch, switch back using the supported settings or launcher flow rather than editing unrelated game files.'
      ]},
      { heading: 'Separate stutter from a loading freeze', paragraphs: [
        'A brief hitch during movement can be frame pacing, shader compilation, storage activity, or a world transition. A loading screen that never completes is a different failure. Note whether input still responds, whether the transition eventually finishes, and whether the same spot reproduces the issue. Hotfix 1 specifically addressed a tutorial loading-screen freeze while returning to Tresna; do not assume a freeze in every chapter is the identical bug.',
        'For a stutter test, traverse the same small route twice after the initial load. For a freeze test, use the exact return transition and record whether it hangs on both APIs. Do not interrupt a normal loading screen too quickly, but do not leave a repeatable hard freeze unreported. If only one API reproduces it, note that result with the machine and driver details. If both do, the cause may lie elsewhere in the configuration or build.'
      ]},
      { heading: 'Interpret results without overclaiming', paragraphs: [
        'If DirectX 11 reduces the same crash or stutter on repeated runs, use it as the current workaround on your PC and keep a note of the build. If DirectX 12 behaves better, the same advice applies in reverse. If the results are mixed, choose the option that avoids the more disruptive failure and test again after the next patch. The hotfix asks players with instability or poor performance to try both; it does not publish a winner or a benchmark for every GPU.',
        'Do not compare two different areas or saves and attribute the outcome solely to the API. Enemy count, effects, camera, and loading state can all change the workload. Do not publish an exact frame-rate gain unless you measured it with the same settings and a repeatable scene. Community experiences help identify patterns, but one player’s stable configuration cannot guarantee another system will behave the same way.'
      ]},
      { heading: 'What to include in a useful PC report', paragraphs: [
        'If the issue persists, include your CPU and GPU models, driver version, Windows version, memory, storage type, selected API, resolution, graphics preset, and a short reproduction path. Say whether the problem is a crash, a permanent freeze, a temporary hitch, or a performance drop. Mention whether it happens on both DirectX options and whether it began before or after Hotfix 1. A clear report is more actionable than a screenshot of a settings menu alone.',
        'Preserve crash details and do not upload private account data or unrelated files. If the game shows an official report form or prompt, use that channel and describe the steps in plain language. Avoid changing save data while investigating a rendering problem. If you need to return to your previous configuration, restore the recorded API and graphics settings one at a time.'
      ]},
      { heading: 'Keep a stable play setup after testing', paragraphs: [
        'Once one API completes your normal route reliably, keep it selected for the next session and avoid retuning every setting. Stability matters more than chasing a small unverified counter increase when you are carrying valuable loot. If a later patch changes rendering behavior, repeat the same scenario instead of assuming today’s result will remain final. Keep the test note with its date and build so older advice does not look like a universal PC requirement.',
        'The DirectX selector is a useful diagnostic because it offers two supported paths through the same game. Its value comes from a controlled trial: baseline, switch, repeat, compare, and preserve the result. That method helps distinguish an API-specific issue from a broader loading, storage, driver, or save problem without inventing a one-size-fits-all fix.'
      ]},
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1 Patch Notes', description: 'Quest, combat, dungeon, weapon, and stability changes.' },
      { href: '/moonlighter-2-hardcore-is-not-dx/', title: 'Hardcore Is Not a DirectX Test', description: 'Test graphics options on a save where a crash will not end your campaign.' },
      { href: '/moonlighter-2-pc-system-requirements/', title: 'PC System Requirements', description: 'Compare your system with the current storefront requirements.' },
    ],
    sources: [],
  },
};
