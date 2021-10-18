import React from 'react';
import { Switch, Route } from 'react-router-dom';

//screens
import Home from './Home';
import Card from './Advanced';
import Login from './Login';

class Default extends React.Component {
    render() {
        return (
            <div>
                <header>Tangor</header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/card" component={Card} />
                        <Route path="/login" component={Login} />
                        <Route render={() => <p>not found!.</p>} />
                    </Switch>
                </main>
                {/* <div className="sankou">
                <footer className="link">もっと詳しく知りたい
                    <br /><a href="https://e-words.jp/">IT用語辞典</a>
                    <br /><a href="https://kotobank.jp/">コトバンク</a>
                </footer>
                </div> */}
                <footer className="copylight">© 2021 Y.Kosuke</footer>
            </div>
        );
    }
}

export default Default;