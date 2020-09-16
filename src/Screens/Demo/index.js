/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Style from './Style'

const Demo = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ ...Style.scrollView }}>
                    <Header />
                    {global.HermesInternal == null ? null : (
                        <View style={{ ...Style.engine }}>
                            <Text style={{ ...Style.footer }}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={{ ...Style.body }}>
                        <View style={{ ...Style.sectionContainer }}>
                            <Text style={{ ...Style.sectionTitle }}>Step One</Text>
                            <Text style={{ ...Style.sectionDescription }}>
                                Edit <Text style={{ ...Style.highlight }}>App.js</Text> to change this
                                screen and then come back to see your edits.
                            </Text>
                        </View>
                        <View style={{ ...Style.sectionContainer }}>
                            <Text style={{ ...Style.sectionTitle }}>See Your Changes</Text>
                            <Text style={{ ...Style.sectionDescription }}>
                                <ReloadInstructions />
                            </Text>
                        </View>
                        <View style={{ ...Style.sectionContainer }}>
                            <Text style={{ ...Style.sectionTitle }}>Debug</Text>
                            <Text style={{ ...Style.sectionDescription }}>
                                <DebugInstructions />
                            </Text>
                        </View>
                        <View style={{ ...Style.sectionContainer }}>
                            <Text style={{ ...Style.sectionTitle }}>Learn More</Text>
                            <Text style={{ ...Style.sectionDescription }}>
                                Read the docs to discover what to do next:
                            </Text>
                        </View>
                        <LearnMoreLinks />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Demo;
